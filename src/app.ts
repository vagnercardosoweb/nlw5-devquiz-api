import 'reflect-metadata';
import './dotenv';
import './config/module-alias';

import * as Sentry from '@sentry/node';
import * as Tracing from '@sentry/tracing';
import cookieParser from 'cookie-parser';
import express from 'express';
import 'express-async-errors';
import helmet from 'helmet';
import http from 'http';
import httpGraceFullShutdown from 'http-graceful-shutdown';
import morgan from 'morgan';

import configApp from '@src/config/app';
import configSentry from '@src/config/sentry';
import sequelize from '@src/database';
import appRoutes from '@src/routes';

import apiTokenMiddleware from '@middlewares/ApiTokenMiddleware';
import corsMiddleware from '@middlewares/CorsMiddleware';
import errorHandlerMiddleware from '@middlewares/ErrorHandlerMiddleware';
import methodOverrideMiddleware from '@middlewares/MethodOverrideMiddleware';
import notFoundMiddleware from '@middlewares/NotFoundMiddleware';

class App {
  protected app: express.Application;
  protected server: http.Server;
  protected port: number;

  constructor() {
    this.app = express();
    this.server = http.createServer(this.app);
    this.port = Number(process.env.PORT || 3333);

    if (configSentry.enable) {
      Sentry.init({
        dsn: process.env.SENTRY_DSN,
        tracesSampleRate: 1.0,
        integrations: [
          new Sentry.Integrations.Http({ tracing: true }),
          new Tracing.Integrations.Express({
            app: this.app,
            router: appRoutes,
            methods: ['all'],
          }),
        ],
      });
    }

    this.app.set('trust proxy', true);
    this.app.set('x-powered-by', false);

    this.server.on('listening', () => {
      this.registerMiddlewares();
    });
  }

  public registerMiddlewares(): void {
    if (configSentry.enable) {
      this.app.use(Sentry.Handlers.requestHandler());
      this.app.use(Sentry.Handlers.tracingHandler());
    }

    this.app.use(helmet());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cookieParser(configApp.appKey));
    this.app.use(morgan('combined'));
    this.app.use(corsMiddleware);
    this.app.use(methodOverrideMiddleware);
    this.app.use(apiTokenMiddleware);
    this.app.use(appRoutes);
    this.app.use(notFoundMiddleware);

    if (configSentry.enable) {
      this.app.use(Sentry.Handlers.errorHandler());
    }

    this.app.use(errorHandlerMiddleware);
  }

  public async start(): Promise<http.Server> {
    return new Promise(resolve => {
      this.server = this.server.listen(this.port);
      httpGraceFullShutdown(this.server);
      resolve(this.server);
    });
  }

  public async close(): Promise<void> {
    await sequelize.close();
    await sequelize.connectionManager.close();

    if (!this.server.listening) {
      return;
    }

    await new Promise((resolve, reject) => {
      this.server.close(err => {
        if (err) {
          reject(err);
        }

        resolve(true);
      });
    });
  }

  public getServer(): http.Server {
    return this.server;
  }

  public getInstance(): express.Application {
    return this.app;
  }
}

export default new App();

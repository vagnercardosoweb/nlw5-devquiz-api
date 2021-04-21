import configApp from '@src/config/app';

const dsn = process.env.SENTRY_DSN;

const configSentry = {
  dsn,
  enable: configApp.isProduction && dsn,
};

export default configSentry;

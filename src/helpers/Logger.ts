import { config, createLogger, format, transports } from 'winston';

const transportsList = [new transports.Console()];

const Logger = createLogger({
  format: format.combine(format.colorize(), format.simple()),
  levels: config.syslog.levels,
  transports: transportsList,
  exceptionHandlers: transportsList,
});

export default Logger;

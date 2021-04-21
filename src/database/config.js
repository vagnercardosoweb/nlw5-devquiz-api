const sequelizeOptions = {
  dialect: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  storage: process.env.DB_STORAGE ?? null,
  timezone: process.env.DB_TIMEZONE ?? 'America/Sao_Paulo',
  migrationStorageTableName: process.env.DB_MIGRATION_NAME ?? 'migrations',
  define: {
    engine: 'InnoDB',
    timestamps: true,
    underscored: true,
    charset: process.env.DB_CHARSET ?? 'utf8mb4',
    collate: process.env.DB_COLLATE ?? 'utf8mb4_general_ci',
  },
};

module.exports = sequelizeOptions;

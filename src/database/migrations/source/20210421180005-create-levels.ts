import { DataTypes, literal, QueryInterface } from 'sequelize';

class CreateTableUsers {
  async up(queryInterface: QueryInterface) {
    await queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');

    await queryInterface.createTable('levels', {
      id: {
        type: DataTypes.STRING(36),
        primaryKey: true,
        unique: true,
        defaultValue: literal('uuid_generate_v4()'),
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      order: {
        type: DataTypes.SMALLINT,
        allowNull: true,
        defaultValue: null,
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: literal('CURRENT_TIMESTAMP'),
        allowNull: false,
      },
      updated_at: {
        type: DataTypes.DATE,
        defaultValue: literal('CURRENT_TIMESTAMP'),
        allowNull: false,
      },
    });

    await queryInterface.addIndex('levels', ['id']);
    await queryInterface.addIndex('levels', ['created_at']);
    await queryInterface.addIndex('levels', ['updated_at']);
  }

  async down(queryInterface: QueryInterface) {
    await queryInterface.dropTable('levels');
  }
}

export default new CreateTableUsers();

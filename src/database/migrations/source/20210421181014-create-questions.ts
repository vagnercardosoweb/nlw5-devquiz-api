import { DataTypes, literal, QueryInterface } from 'sequelize';

class CreateTableUsers {
  async up(queryInterface: QueryInterface) {
    await queryInterface.sequelize.query(
      'CREATE EXTENSION IF NOT EXISTS "uuid-ossp";',
    );

    await queryInterface.createTable('questions', {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        unique: true,
        defaultValue: literal('uuid_generate_v4()'),
      },
      level_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          key: 'id',
          model: 'levels',
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      icon_name: {
        type: DataTypes.STRING,
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
      deleted_at: {
        type: DataTypes.DATE,
        defaultValue: null,
        allowNull: true,
      },
    });

    await queryInterface.addIndex('questions', ['id']);
    await queryInterface.addIndex('questions', ['name']);
    await queryInterface.addIndex('questions', ['level_id']);
    await queryInterface.addIndex('questions', ['created_at']);
    await queryInterface.addIndex('questions', ['updated_at']);
    await queryInterface.addIndex('questions', ['deleted_at']);
  }

  async down(queryInterface: QueryInterface) {
    await queryInterface.dropTable('questions');
  }
}

export default new CreateTableUsers();

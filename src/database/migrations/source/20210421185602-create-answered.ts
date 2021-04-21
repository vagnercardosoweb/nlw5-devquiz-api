import { DataTypes, literal, QueryInterface } from 'sequelize';

class CreateTableUsers {
  async up(queryInterface: QueryInterface) {
    await queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');

    await queryInterface.createTable('answered', {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        unique: true,
        defaultValue: literal('uuid_generate_v4()'),
      },
      user_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          key: 'id',
          model: 'users',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      answer_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          key: 'id',
          model: 'answers',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      points: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      correct: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: literal('CURRENT_TIMESTAMP'),
        allowNull: false,
      },
    });

    await queryInterface.addIndex('answered', ['id']);
    await queryInterface.addIndex('answered', ['user_id']);
    await queryInterface.addIndex('answered', ['answer_id']);
    await queryInterface.addIndex('answered', ['correct']);
    await queryInterface.addIndex('answered', ['created_at']);
  }

  async down(queryInterface: QueryInterface) {
    await queryInterface.dropTable('answered');
  }
}

export default new CreateTableUsers();

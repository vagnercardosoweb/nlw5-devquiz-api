import { DataTypes, literal, QueryInterface } from 'sequelize';

class CreateTableUsers {
  async up(queryInterface: QueryInterface) {
    await queryInterface.sequelize.query(
      'CREATE EXTENSION IF NOT EXISTS "uuid-ossp";',
    );

    await queryInterface.createTable('answers', {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        unique: true,
        defaultValue: literal('uuid_generate_v4()'),
      },
      question_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          key: 'id',
          model: 'questions',
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT',
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      correct: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      points: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
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

    await queryInterface.addIndex('answers', ['id']);
    await queryInterface.addIndex('answers', ['name']);
    await queryInterface.addIndex('answers', ['question_id']);
    await queryInterface.addIndex('answers', ['correct']);
    await queryInterface.addIndex('answers', ['created_at']);
    await queryInterface.addIndex('answers', ['updated_at']);
    await queryInterface.addIndex('answers', ['deleted_at']);
  }

  async down(queryInterface: QueryInterface) {
    await queryInterface.dropTable('answers');
  }
}

export default new CreateTableUsers();

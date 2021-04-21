"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = require("sequelize");

class CreateTableUsers {
  async up(queryInterface) {
    await queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');
    await queryInterface.createTable('answers', {
      id: {
        type: _sequelize.DataTypes.UUID,
        primaryKey: true,
        unique: true,
        defaultValue: (0, _sequelize.literal)('uuid_generate_v4()')
      },
      question_id: {
        type: _sequelize.DataTypes.UUID,
        allowNull: false,
        references: {
          key: 'id',
          model: 'questions'
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
      name: {
        type: _sequelize.DataTypes.STRING(100),
        allowNull: false
      },
      correct: {
        type: _sequelize.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      points: {
        type: _sequelize.DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0
      },
      created_at: {
        type: _sequelize.DataTypes.DATE,
        defaultValue: (0, _sequelize.literal)('CURRENT_TIMESTAMP'),
        allowNull: false
      },
      updated_at: {
        type: _sequelize.DataTypes.DATE,
        defaultValue: (0, _sequelize.literal)('CURRENT_TIMESTAMP'),
        allowNull: false
      },
      deleted_at: {
        type: _sequelize.DataTypes.DATE,
        defaultValue: null,
        allowNull: true
      }
    });
    await queryInterface.addIndex('answers', ['id']);
    await queryInterface.addIndex('answers', ['name']);
    await queryInterface.addIndex('answers', ['question_id']);
    await queryInterface.addIndex('answers', ['correct']);
    await queryInterface.addIndex('answers', ['created_at']);
    await queryInterface.addIndex('answers', ['updated_at']);
    await queryInterface.addIndex('answers', ['deleted_at']);
  }

  async down(queryInterface) {
    await queryInterface.dropTable('answers');
  }

}

var _default = new CreateTableUsers();

exports.default = _default;
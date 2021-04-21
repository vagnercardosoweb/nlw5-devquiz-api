"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = require("sequelize");

class CreateTableUsers {
  async up(queryInterface) {
    await queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');
    await queryInterface.createTable('answered', {
      id: {
        type: _sequelize.DataTypes.UUID,
        primaryKey: true,
        unique: true,
        defaultValue: (0, _sequelize.literal)('uuid_generate_v4()')
      },
      user_id: {
        type: _sequelize.DataTypes.UUID,
        allowNull: false,
        references: {
          key: 'id',
          model: 'users'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      answer_id: {
        type: _sequelize.DataTypes.UUID,
        allowNull: false,
        references: {
          key: 'id',
          model: 'answers'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      correct: {
        type: _sequelize.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      created_at: {
        type: _sequelize.DataTypes.DATE,
        defaultValue: (0, _sequelize.literal)('CURRENT_TIMESTAMP'),
        allowNull: false
      }
    });
    await queryInterface.addIndex('answered', ['id']);
    await queryInterface.addIndex('answered', ['user_id']);
    await queryInterface.addIndex('answered', ['answer_id']);
    await queryInterface.addIndex('answered', ['correct']);
    await queryInterface.addIndex('answered', ['created_at']);
  }

  async down(queryInterface) {
    await queryInterface.dropTable('answered');
  }

}

var _default = new CreateTableUsers();

exports.default = _default;
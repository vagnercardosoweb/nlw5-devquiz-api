"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = require("sequelize");

class CreateTableUsers {
  async up(queryInterface) {
    await queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');
    await queryInterface.createTable('questions', {
      id: {
        type: _sequelize.DataTypes.UUID,
        primaryKey: true,
        unique: true,
        defaultValue: (0, _sequelize.literal)('uuid_generate_v4()')
      },
      level_id: {
        type: _sequelize.DataTypes.UUID,
        allowNull: false,
        references: {
          key: 'id',
          model: 'levels'
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
      name: {
        type: _sequelize.DataTypes.STRING(100),
        allowNull: false
      },
      icon_name: {
        type: _sequelize.DataTypes.STRING,
        allowNull: true,
        defaultValue: null
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
    await queryInterface.addIndex('questions', ['id']);
    await queryInterface.addIndex('questions', ['name']);
    await queryInterface.addIndex('questions', ['level_id']);
    await queryInterface.addIndex('questions', ['created_at']);
    await queryInterface.addIndex('questions', ['updated_at']);
    await queryInterface.addIndex('questions', ['deleted_at']);
  }

  async down(queryInterface) {
    await queryInterface.dropTable('questions');
  }

}

var _default = new CreateTableUsers();

exports.default = _default;
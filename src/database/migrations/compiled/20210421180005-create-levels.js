"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = require("sequelize");

class CreateTableUsers {
  async up(queryInterface) {
    await queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');
    await queryInterface.createTable('levels', {
      id: {
        type: _sequelize.DataTypes.UUID,
        primaryKey: true,
        unique: true,
        defaultValue: (0, _sequelize.literal)('uuid_generate_v4()')
      },
      name: {
        type: _sequelize.DataTypes.STRING(100),
        allowNull: false
      },
      order: {
        type: _sequelize.DataTypes.SMALLINT,
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
      }
    });
    await queryInterface.addIndex('levels', ['id']);
    await queryInterface.addIndex('levels', ['order']);
    await queryInterface.addIndex('levels', ['created_at']);
    await queryInterface.addIndex('levels', ['updated_at']);
  }

  async down(queryInterface) {
    await queryInterface.dropTable('levels');
  }

}

var _default = new CreateTableUsers();

exports.default = _default;
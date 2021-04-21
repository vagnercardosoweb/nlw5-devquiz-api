"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class UserSeeder {
  async up(queryInterface) {
    await queryInterface.bulkInsert('users', [{
      name: 'User Example',
      email: 'user@example.com',
      password: await _bcryptjs.default.hash('string', 12)
    }]);
  }

  async down(queryInterface) {
    await queryInterface.bulkDelete('users', {});
  }

}

var _default = new UserSeeder();

exports.default = _default;
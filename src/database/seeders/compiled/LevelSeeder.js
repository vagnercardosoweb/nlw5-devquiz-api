"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class LevelSeeder {
  async up(queryInterface) {
    await queryInterface.bulkInsert('levels', [{
      name: 'Fácil',
      order: 1
    }, {
      name: 'Médio',
      order: 2
    }, {
      name: 'Difícil',
      order: 3
    }, {
      name: 'Perito',
      order: 4
    }]);
  }

  async down(queryInterface) {
    await queryInterface.bulkDelete('levels', {});
  }

}

var _default = new LevelSeeder();

exports.default = _default;
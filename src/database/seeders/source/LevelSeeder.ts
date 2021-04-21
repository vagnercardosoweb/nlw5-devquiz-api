import { QueryInterface } from 'sequelize';

class LevelSeeder {
  public async up(queryInterface: QueryInterface) {
    await queryInterface.bulkInsert('levels', [
      { name: 'Fácil', order: 1 },
      { name: 'Médio', order: 2 },
      { name: 'Difícil', order: 3 },
      { name: 'Perito', order: 4 },
    ]);
  }

  public async down(queryInterface: QueryInterface) {
    await queryInterface.bulkDelete('levels', {});
  }
}

export default new LevelSeeder();

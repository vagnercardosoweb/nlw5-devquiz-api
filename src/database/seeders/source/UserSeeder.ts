import bcrypt from 'bcryptjs';
import { QueryInterface } from 'sequelize';

class UserSeeder {
  public async up(queryInterface: QueryInterface) {
    await queryInterface.bulkInsert('users', [
      {
        name: 'User Example',
        email: 'user@example.com',
        password: await bcrypt.hash('string', 12),
      },
    ]);
  }

  public async down(queryInterface: QueryInterface) {
    await queryInterface.bulkDelete('users', {});
  }
}

export default new UserSeeder();

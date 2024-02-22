/** @type {import('sequelize-cli').Migration} */
const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface) {
    const hash = await bcrypt.hash('qwerty1', 10);
    await queryInterface.bulkInsert('Users', [
      {
        name: 'admin',
        email: 'a@a.com',
        password: hash,
        score: 99999,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};

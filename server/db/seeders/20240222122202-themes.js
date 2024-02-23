/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "Themes",
      [
        {
          name: "Правда или Ложь",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Молодые старики",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Известные личности",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Теории заговора",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Принадлежности",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Themes", null, {});
  },
};

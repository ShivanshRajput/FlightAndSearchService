'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Airports' , [
      {
        name:'Chhatrapati Shivaji Maharaj International Airport (BOM)',
        cityId: 2,
        address: 'Santacruz and Sahar, Maharashtra, India',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'Bhogapuram International Airport',
        cityId: 3,
        address: 'Bhogapuram, Visakhapatnam, Andhra Pradesh, India',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'Juhu Aerodrome',
        cityId: 2,
        address: 'Juhu, Maharashtra, India',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'Visakhapatnam Airport (VTZ)',
        cityId: 3,
        address: 'Visakhapatnam, Andhra Pradesh, India',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'Visakhapatnam Airport (VTZ)',
        cityId: 3,
        address: 'Visakhapatnam, Andhra Pradesh, India',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:'Chennai International Airport',
        cityId: 1,
        address: 'Meenambakkam, Chennai, Tamil Nadu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
      
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

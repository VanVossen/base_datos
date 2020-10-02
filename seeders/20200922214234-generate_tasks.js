'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {


      return queryInterface.bulkInsert('tasks', [
        //{id:1,description:'grabar el curso de backend1', createdAt: new Date(), updatedAt: new Date()},
        {id:1,description:'grabar el curso de backend1', createdAt: new Date(), updatedAt: new Date()},
        {id:2,description:'grabar el curso de backend1', createdAt: new Date(), updatedAt: new Date()},
        {id:3,description:'grabar el curso de backend1', createdAt: new Date(), updatedAt: new Date()}
        /*{id:1,description:'grabar el curso de backend1'},
        {id:2,description:'grabar el curso de backend2'},
        {id:3,description:'grabar el curso de backend3'}*/
      ], {});

  },

  down: async (queryInterface, Sequelize) => {

     return queryInterface.bulkDelete('tasks', null, {});
     }
};

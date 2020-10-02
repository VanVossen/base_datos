'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Task.init({
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Task',
  });

/*  var Task = sequelize.define('Task',{
    description: DataTypes.TEXT
  },{});
*/
  Task.associate = function(models){
    Task.belongsTo(models.User,{
      as: 'user'
    });
  }

  return Task;
};

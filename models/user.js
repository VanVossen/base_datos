'use strict';

const bcrypt = require('bcrypt');

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password_hash: DataTypes.STRING,
    password: DataTypes.VIRTUAL
  }, {
    sequelize,
    modelName: 'User',
  });

  User.login = function(email,password){
    //busca al usuario
    return User.findOne({
      where: {
        email:email
      }
    }).then(user=>{
      if(!user) return null;
      return user.authenticatePassword(password).then(valid=> valid ? user : null);
    });
  };
  // ver prototype en javascript
  User.prototype.authenticatePassword = function(password){
    return new Promise((res,rej)=>{
      bcrypt.compare(password,this.password_hash,function(err,valid){
        if(err) return rej(err);
        res(valid);
      })
    })
  };

  User.associate = function(models){
    //associate can be define here
    User.hasMany(models.Task,{
      as: 'tasks'
    });
  };

  User.beforeCreate(function(user,options){
     return new Promise((res,rej)=>{
       if(user.password){
         bcrypt.hash(user.password,10,function(error,hash){
           user.password_hash = hash;
           res();
         })
       };
     });
  });

  return User;
};

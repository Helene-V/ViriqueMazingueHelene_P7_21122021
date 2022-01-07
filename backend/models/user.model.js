const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');
const article = require('./article.model');


module.exports = (sequelize, DataTypes) => {
  return sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: 'Ce nom est déjà pris.'
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: 'Cette adresse mail est déjà utilisée.'
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isAdmin: {
      type: Sequelize.TINYINT,
      defaultValue: 0
    }, 
  }, {
    timestamps: true,
    createdAt: 'created',
    updatedAt: false
  })
}

/*
La logique de la table User :
- id
- username
- email
- password
- isAdmin-role
  */
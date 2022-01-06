const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('article', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    media: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    timestamps: true,
    createdAt: 'created',
    updatedAt: false
  })
}


/*
La logique de la table Article :
- id > création automatique, sinon :
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
- title
- content
- dateAdd > création automatique
- userId
- media

https://sql.sh/416-limites-types-donnees-sgbd
  */
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');
const article = require('./article.model');

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
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

/*module.exports = (sequelize, DataTypes) => {
  return sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
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
}*/


/*module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    username: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    roleId: {
      type: Sequelize.INTEGER,
      defaultValue: 1
    }
  });

  return User;
};
*/
/*
La logique de la table User :
- id
- username
- email
- password
- isAdmin-role
  */
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
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('article', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    media: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    userId: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
  }, {
    timestamps: true,
    createdAt: 'created',
    updatedAt: false
  })
}
*/

/*module.exports = (sequelize, Sequelize) => {
    const Article = sequelize.define("article", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      media: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.SMALLINT
      }
    });
  
    return Article;
  };
*/
/*
La logique de la table Article :
- id > création automatique
- title
- content
- dateAdd > création automatique
- userId
- media

https://sql.sh/416-limites-types-donnees-sgbd
  */
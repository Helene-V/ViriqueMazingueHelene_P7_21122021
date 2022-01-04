const Sequelize = require("sequelize");
const sequelize = new Sequelize( 'groupomania_app', 'root', 'root', {
  host: "localhost",
  dialect: "mysql",
  logging: false
});
/*
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);
*/
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.articles = require("./article.model.js")(sequelize, Sequelize);
db.user = require("../models/user.model.js")(sequelize, Sequelize);

db.articles.belongsTo(db.user, {
  foreignKey: {
    name: 'userId',
    allowNull: false,
  },
  onDelete: 'CASCADE',
  onUpdate: 'NO ACTION',
});

//db.ROLES = ["user", "admin"];

module.exports = db;

//https://sequelize.org/master/manual/advanced-many-to-many.html#many-to-many-to-many-relationships-and-beyond
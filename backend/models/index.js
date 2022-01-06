const Sequelize = require('sequelize');
const sequelize = require('../config/db.config');
const db = {};


db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.articles = require('./article.model.js')(sequelize, Sequelize);
db.user = require('../models/user.model.js')(sequelize, Sequelize);

db.user.hasMany(db.articles, {
  foreignKey: {
    name: 'userId',
    allowNull: false,
  },
  onDelete: 'CASCADE',
  onUpdate: 'NO ACTION',
});
db.articles.belongsTo(db.user, {
  foreignKey: 'userId'
});

module.exports = db;

//https://sequelize.org/master/manual/advanced-many-to-many.html#many-to-many-to-many-relationships-and-beyond

/* Tests
  db.articles.belongsTo(db.user, {
  foreignKey: {
    name: 'userId',
    allowNull: false,
  },
  onDelete: 'CASCADE',
  onUpdate: 'NO ACTION',
});
*/
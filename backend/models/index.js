const Sequelize = require('sequelize');
const sequelize = require('../config/db.config');

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.article = require('./article.model.js')(sequelize, Sequelize);
db.user = require('../models/user.model.js')(sequelize, Sequelize);

db.user.hasMany(db.article, {
  foreignKey: {
    name: 'userId',
    allowNull: false,
  },
  onDelete: 'CASCADE',
  onUpdate: 'NO ACTION',
});
db.article.belongsTo(db.user, {
  foreignKey: 'userId'
});

module.exports = db;

//https://sequelize.org/master/manual/advanced-many-to-many.html#many-to-many-to-many-relationships-and-beyond

/* Tests
  db.article.belongsTo(db.user, {
  foreignKey: {
    name: 'userId',
    allowNull: false,
  },
  onDelete: 'CASCADE',
  onUpdate: 'NO ACTION',
});
*/
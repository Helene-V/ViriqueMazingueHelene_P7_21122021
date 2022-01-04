const Sequelize = require('sequelize');

const sequelize = new Sequelize( 'groupomania_app', 'root', 'root', {
  host: "localhost",
  dialect: "mysql",
  logging: false
});

//sequelize
//    .sync()
//    .then(() => { console.log('La base de donnée a bien été initialisée.') })
//    .catch(error => {
//        console.log(`Il y a eu un problème avec l'initialisation des données : ${error}`);
//    })  

sequelize.authenticate()
  .then(() => console.log('La connexion à la base de données a bien été établie.'))
  .catch(error => console.log('Connexion échouée:' + error))


module.exports = sequelize;


/*const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize( 'groupomania', 'root', 'root', {
  host: "localhost",
  dialect: "mysql",
  dialectOptions: {
    timezone: 'Etc/GMT-2',
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.articles = require("../article.model.js")(sequelize, Sequelize); // POSTS DONT IMAGES
db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
  through: "users",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.user.belongsToMany(db.role, {
  through: "users",
  foreignKey: "userId",
  otherKey: "roleId"
});

db.ROLES = ["user", "admin"];

module.exports = db;
*/

/*module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "root",
  DB: "groupomania",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};*/


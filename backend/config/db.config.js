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
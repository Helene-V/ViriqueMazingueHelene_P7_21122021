module.exports = (sequelize, Sequelize) => {
    const Article = sequelize.define("article", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Article;
  };

  /* MODELE SEQUELIZE
  Représente la table dans la DB MySQL
  Les colonnes générées automatiquement :
  - id
  - title
  - description
  - published
  - createdAt
  - updatedAt

  DONC = il n'y a plus besoin d'écrire les fonctions CRUD !
  
  C'est Sequelize qui s'en occupe (c'est les fonctions qui seront ensuite dans le controller):
  - create a new Article: create(object)
  - find a Article by id: findByPk(id)
  - get all Articles: findAll()
  - update a Article by id: update(data, where: { id: id })
  - remove a Article: destroy(where: { id: id })
  - remove all Articles: destroy(where: {})
  - find all Articles by title: findAll({ where: { title: ... } })
  */
module.exports = (sequelize, Sequelize) => {
    const Article = sequelize.define("article", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      selectedFile: {
        type: Sequelize.BLOB('long')
      }
    });
  
    return Article;
  };

/*
La logique de la table Article :
- id
- title
- content
- dateAdd
- userId
- media
  */
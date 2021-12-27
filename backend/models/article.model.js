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
      },
      selectedFile: {
        type: Sequelize.BLOB('long')
      }
    });
  
    return Article;
  };

  // SelectedFile pour les images - ajout fs à faire
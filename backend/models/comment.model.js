module.exports = (sequelize, Sequelize) => {
    const Comment = sequelize.define("comment", {
      content: {
        type: Sequelize.STRING
      }
    });
  
    return Comment;
  };

  /*
La logique de la table Comment :
- id
- content
- userId
- articleId
- dateAdd
  */
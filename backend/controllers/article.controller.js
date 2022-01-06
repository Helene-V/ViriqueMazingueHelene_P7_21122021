const db = require('../models');
//const fs = require('fs') - multer
const Article = db.articles;
const Op = db.Sequelize.Op; // Opérateur pour recherche like

exports.create = (req, res) => {

  Article.create({
    title: req.body.title,
    description: req.body.description,
    media: req.body.media, // Ajout fichier media
    userId: req.body.userId
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send(console.log(error));
    });
};

/*
// Création d'un nouvel article
exports.create = (req, res) => {
  // La requête doit être valide
  if (!req.body.title) {
    res.status(400).send({
      message: "Veuillez vérifier le contenu des différents champs"
    });
    return;
  }

// Créer un article
  const article = {
    title: req.body.title,
    description: req.body.description,
    media: req.body.media, // Ajout fichier media
    userId: req.body.userId
  };

//Test envoi d'un media
//  console.log(req.file);
//    if (req.file) {
//        createObject.media = req.file.path
//    }

  // Enregistrer l'article dans la BDD
  Article.create(article)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Erreur lors de la création de l'article"
      });
    });
};
*/
// Retrouver tous les articles dans la BDD
exports.findAll = (req, res) => {
  const title = req.query.title;
  const condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Article.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Une erreur empêche la récupération des articles"
      });
    });
};

// Retrouver un article par son id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Article.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Nous ne retrouvons pas l'article avec l'id : ${id}`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Problème de récupération de l'article ayant comme id : " + id
      });
    });
};

// Modifier un article
exports.update = (req, res) => {
  const id = req.params.id;

  Article.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Votre article a bien été modifié !"
        });
      } else {
        res.send({
          message: `Impossible de modifier l'article ayant l'id :${id}. Veuillez vérifier votre saisie et si l'article existe bien.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Erreur lors de la modification de l'article id : " + id
      });
    });
};

// Supprimer un article
exports.delete = (req, res) => {
  const id = req.params.id;

  Article.destroy({
    where: { id: id } 

  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Votre article a bien été supprimé"
        });
      } else {
        res.send({
          message: `Impossible de supprimer votre article ayant pour id : ${id}`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Impossible de supprimer l'article id : " + id
      });
    });
};

// Supprimer tous les articles de la BDD
exports.deleteAll = (req, res) => {
  Article.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Tous les articles ont été supprimés` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Une erreur empêche la suppression multiple des articles"
      });
    });
};


//https://medium.com/@sarahdherr/sequelizes-update-method-example-included-39dfed6821d

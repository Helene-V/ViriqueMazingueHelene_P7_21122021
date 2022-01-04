const multer = require('../middleware/multer-config');

module.exports = app => {
    const articles = require("../controllers/article.controller.js");
  
    const router = require("express").Router();
  
    // Créer un nouvel article
    router.post("/", articles.create);
  
    // Retrouver tous les articles
    router.get("/", articles.findAll);
  
    // Retrouver un article par son id
    router.get("/:id", articles.findOne);
  
    // Modifier un article via son id
    router.put("/:id", articles.update);
  
    // Supprimer un article via son id
    router.delete("/:id", articles.delete);
  
    // Supprimer tous les articles
    router.delete("/", articles.deleteAll);
  
    app.use('/api/articles', router);
  };

//P6 : auth sur les routes 

/*
module.exports = app => {
    const articles = require("../controllers/article.controller.js");
  
    const router = require("express").Router();
  
    // Créer un nouvel article
    router.post("/", multer, articles.create);
  
    // Retrouver tous les articles
    router.get("/", articles.findAll);
  
    // Retrouver un article par son id
    router.get("/:id", articles.findOne);
  
    // Modifier un article via son id
    router.put("/:id", multer, articles.update);
  
    // Supprimer un article via son id
    router.delete("/:id", articles.delete);
  
    // Supprimer tous les articles
    router.delete("/", articles.deleteAll);
  
    app.use('/api/articles', router);
  }; */

  /* Récap de l'API :
  GET --> api/articles --> récupére tous les Articles
  GET --> api/articles/:id --> récupère l'Article par son id
  POST --> api/articles --> ajoute un nouveau Article
  PUT --> api/articles/:id --> modifie un Article récupéré par son id
  DELETE --> api/articles/:id --> supprime un Article récupéré par son id
  DELETE --> api/articles --> supprime TOUS les Articles
  GET --> api/articles?title=[kw] --> trouve tous les Articles dont le titre contient 'kw'
  */
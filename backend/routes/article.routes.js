module.exports = app => {
    const articles = require("../controllers/article.controller.js");
  
    const router = require("express").Router();
  
    // Create a new Article
    router.post("/", articles.create);
  
    // Retrieve all Articles
    router.get("/", articles.findAll);
  
    // Retrieve all published Articles
    router.get("/published", articles.findAllPublished);
  
    // Retrieve a single Article with id
    router.get("/:id", articles.findOne);
  
    // Update a Article with id
    router.put("/:id", articles.update);
  
    // Delete a Article with id
    router.delete("/:id", articles.delete);
  
    // Delete all Articles
    router.delete("/", articles.deleteAll);
  
    app.use('/api/articles', router);
  };

  /* Récap de l'API :
  GET --> api/articles --> récupére tous les Articles
  GET --> api/articles/:id --> récupère l'Article par son id
  POST --> api/articles --> ajoute un nouveau Article
  PUT --> api/articles/:id --> modifie un Article récupéré par son id
  DELETE --> api/articles/:id --> supprime un Article récupéré par son id
  DELETE --> api/articles --> supprime TOUS les Articles
  GET --> api/articles?title=[kw] --> trouve tous les Articles dont le titre contient 'kw'
  */
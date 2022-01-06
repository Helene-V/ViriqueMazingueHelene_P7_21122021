const express = require('express');
const router = express.Router();
const articleCtrl = require('../controllers/article.controller');
const auth = require('../middleware/authJwt')
//const multer = require('../middleware/multer-config');

  
// Créer un nouvel article
router.post("/", auth, articleCtrl.create);
  
// Retrouver tous les articles
router.get("/", auth, articleCtrl.findAll);
  
// Retrouver un article par son id
router.get("/:id", auth, articleCtrl.findOne);
  
// Modifier un article via son id
router.put("/:id", auth, articleCtrl.update);
  
// Supprimer un article via son id
router.delete("/:id", auth, articleCtrl.delete);
  
// Supprimer tous les articles
router.delete("/", auth, articleCtrl.deleteAll);
  
module.exports = router;
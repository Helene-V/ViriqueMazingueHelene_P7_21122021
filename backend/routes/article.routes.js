const express = require('express');
const router = express.Router();

const authJwt = require('../middleware/authJwt')
const articleCtrl = require('../controllers/article.controller');
const multer = require('../middleware/multer-config');

  
router.post('/', authJwt, multer, articleCtrl.createArticle);
router.get('/', authJwt, articleCtrl.findAllArticles);
router.get('/:id', authJwt, articleCtrl.findOneArticle);
router.put('/:id', authJwt, multer, articleCtrl.updateArticle);
router.delete('/:id', authJwt, articleCtrl.deleteArticle);

  

module.exports = router;


// L'admin doit pouvoir supprimer un post et son média si présent
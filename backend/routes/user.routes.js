const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user.controller');
//const auth = require('../middleware/authJwt')

router.post('/signup', userCtrl.signup);
router.post('/signin', userCtrl.signin);
//router.delete('/:id', auth, userCtrl.delete);

module.exports = router;
/*const { authJwt, verifySignUp } = require('../middleware');
const controller = require('../controllers/user.controller');

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/auth/signup", [verifySignUp.checkDuplicateUsernameOrEmail , authJwt.verifyToken], controller.signup);

  app.post("/api/auth/signin", [authJwt.verifyToken], controller.signin);

  app.delete("/api/:id", controller.delete);
};*/
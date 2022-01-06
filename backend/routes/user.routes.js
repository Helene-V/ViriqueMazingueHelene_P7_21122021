const { authJwt, verifySignUp } = require('../middleware');
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

  //app.delete("/api/:id", controller.delete);
};

/*const { authJwt } = require('../middleware');
const controller = require('../controllers/user.controller');

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/content/all", controller.allAccess);

  app.get("/api/content/user", [authJwt.verifyToken], controller.userContent);

};*/

/*const { authJwt } = require('../middleware');
const controller = require('../controllers/user.controller');

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/content/all", controller.allAccess);

  app.get("/api/content/user", [authJwt.verifyToken], controller.userContent);

};*/

/*
  app.get("/api/content/admin", [authJwt.verifyToken, authJwt.isAdmin], controller.adminContent);

*/
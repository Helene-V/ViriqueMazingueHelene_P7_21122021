const db = require('../models');
const config = require('../config/auth.config');
const User = db.user;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


exports.signup = (req, res) => {
  // Enregistrement des utilisateurs dans la BDD
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    isAdmin: req.body.isAdmin // user role = 1 créer un booléen si User ou Admin (Tinyint 0 ou 1)
  })
    .then(() => {
      res.send({ message: "L'utilisateur est bien enregistré !" });
          }) 
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.signin = (req, res) => {
  // Se connecter
  User.findOne({
    where: {
      username: req.body.username
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "Utilisateur non trouvé" });
      }

      let passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Mot de passe invalide !"
        });
      }
      
      let token = jwt.sign(
        { id: user.id },
        config.secret,
        { expiresIn: 86400}
        );

      res.status(200).json({
        id: user.id,
        username: user.username,
        email:user.email,
        isAdmin: user.isAdmin,
        accessToken: token,
        userId: user.id,
        })
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

/*
exports.signin = (req, res) => {
  // Se connecter
  User.findOne({
    where: {
      username: req.body.username
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "Utilisateur non trouvé" });
      }

      let passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Mot de passe invalide !"
        });
      }
      
      let token = jwt.sign(
        { id: user.id },
        config.secret,
        { expiresIn: 86400}
        );

      res.status(200).send({
        id: user.id,
        username: user.username,
        email:user.email,
        isAdmin: user.isAdmin,
        accessToken: token,
        userId: user.id,
        })
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
*/
exports.delete = (req, res) => {
  // Supprimer un compte utilisateur
  User.destroy({
    where: {id: req.params.id }
  })
    .then(() => {
      res.send({ message: "L'utilisateur a bien été supprimé !" });
          }) 
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};




/*

exports.signup = (req, res) => {
  // Enregistrement des utilisateurs dans la BDD
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    isAdmin: req.body.isAdmin
    //user role = 1 créer un booléen si User ou Admin (Tinyint 0 ou 1)
  })
    .then(user => {
      if (req.body.isAdmin) {
            }
      } else {
        // user role = 1 créer un booléen si User ou Admin (Tinyint 0 ou 1)
          res.send({ message: "L'utilisateur est bien enregistré !" });
        });
      }
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

*/

/*exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userContent = (req, res) => {
  res.status(200).send("User Content.");
};*/
/*
exports.adminContent = (req, res) => {
  res.status(200).send("Admin Content.");
};
*/
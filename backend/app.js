const express = require('express');
const helmet = require('helmet'); // Package Helmet pour la sécurité des en-têtes
const morgan = require('morgan'); // à supprimer après le développement
const app = express();

const path = require('path');

// Inmport des routes
const userRoutes = require('./routes/user.routes');
const articleRoutes = require('./routes/article.routes');

// Database
const db = require('../backend/models');
db.sequelize.sync();
// Faire un gros reset de la DB :
//force:
//db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync Database with { force: true }');
// });


// CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});


// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(helmet());
app.use(morgan('dev'));  // à supprimer après le développement


// Routes
app.use('/api/auth', userRoutes);
app.use('/api/articles', articleRoutes);
// ensuite créer ma route pour les commentaires
app.use('/images', express.static(path.join(__dirname, 'images')));

module.exports = app;
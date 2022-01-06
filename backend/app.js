const express = require('express');
const helmet = require('helmet'); // Package Helmet pour la sécurité des en-têtes
const morgan = require('morgan'); // à supprimer après le développement
const cors = require('cors');
const app = express();

const userRoutes = require('../backend/routes/user.routes');
const articleRoutes = require('../backend/routes/article.routes')

app.use(cors());
app.use(morgan('dev'))  // à supprimer après le développement
app.use(express.json());
app.use(helmet());

//const path = require('path');

// Database
const db = require('../backend/models');

db.sequelize.sync();
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

// Routes
app.use('/api/auth', userRoutes);
app.use('/api/articles', articleRoutes);
// ensuite créer ma route pour les commentaires, ex. :
// require('../backend/routes/comment.routes')(app);
// ne pas oublier ma route pour les images avec multer :
// app.use('/images', express.static(path.join(__dirname, 'images')));

module.exports = app;
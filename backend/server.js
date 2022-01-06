const express = require('express')
const morgan = require('morgan') // à supprimer après le développement
const cors = require('cors');
const app = express();

const corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(morgan('dev'))  // à supprimer après le développement
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const path = require('path');

// Database
const db = require('../backend/models');

db.sequelize.sync();
//force:
//db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync Database with { force: true }');
// });

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Groupomania application." });
});
require('../backend/routes/auth.routes')(app);
require('../backend/routes/user.routes')(app);
require('../backend/routes/article.routes')(app);
// ensuite créer ma route pour les commentaires, ex. :
// require('../backend/routes/comment.routes')(app);
// ne pas oublier ma route pour les images avec multer :
// app.use('/images', express.static(path.join(__dirname, 'images')));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
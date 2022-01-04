const express = require('express')
const morgan = require('morgan')
const cors = require("cors");
const sequelize = require('./config/db.config')
const app = express();

const corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const path = require('path');

// Database
const db = require("../backend/models");
db.sequelize.sync();
//force:
//db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync Database with { force: true }');
// });


//Routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Groupomania application." });
});
require('../backend/routes/auth.routes')(app);
require('../backend/routes/user.routes')(app);
require('../backend/routes/article.routes')(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

/*const express = require("express");

const cors = require("cors");

const app = express();

const corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const path = require('path');

// database
const db = require("../backend/models");
const Role = db.role;

db.sequelize.sync();
//force:
//db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync Database with { force: true }');
//   initial();
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Groupomania application." });
});

// routes
require('../backend/routes/auth.routes')(app);
require('../backend/routes/user.routes')(app);
require('../backend/routes/article.routes')(app);
require("../backend/routes/comment.routes")(app);

app.use('/images', express.static(path.join(__dirname, 'images')));

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.create({
    id: 1,
    name: "user"
  });

  Role.create({
    id: 2,
    name: "admin"
  });
 
}
*/
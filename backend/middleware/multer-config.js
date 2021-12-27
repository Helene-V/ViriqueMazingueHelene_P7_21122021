const multer = require('multer'); // Package multer pour le téléchargement de fichiers

const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png',
    'image/gif': 'gif'
};

// Configuration de multer
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'images')
    },
    filename: (req, file, callback) => {
        const name = file.originalname.split(' ').join('_');
        const extension = MIME_TYPES[file.mimetype];
        callback(null, name + Date.now() + '.' + extension);
    }
});

module.exports = multer({ storage }).single('image');


/*
const multer = require("multer"); // Package multer pour le téléchargement de fichiers

const imageFilter = (req, file, callback) => {
  if (file.mimetype.startsWith("image")) {
    callback(null, true);
  } else {
    callback("Please upload only images.", false);
  }
};

// Configuration de multer
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, __basedir + "/backend/uploads/");
  },
    filename: (req, file, callback) => {
        const name = file.originalname.split(' ').join('_');
        const extension = MIME_TYPES[file.mimetype];
        callback(null, name + Date.now() + '.' + extension);
    },
});

const uploadFile = multer({ storage: storage, fileFilter: imageFilter });
module.exports = uploadFile;
 */
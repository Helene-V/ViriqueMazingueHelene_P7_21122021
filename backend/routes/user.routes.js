const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user.controller');
//const auth = require('../middleware/authJwt')

router.post('/signup', userCtrl.signup);
router.post('/signin', userCtrl.signin);
//router.delete('/:id', auth, userCtrl.delete);

module.exports = router;
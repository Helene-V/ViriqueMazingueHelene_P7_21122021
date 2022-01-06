const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user.controller');

router.post('/signup', userCtrl.signup);
router.post('/signin', userCtrl.signin);
//router.delete('/:id', authJwt, userCtrl.delete);

module.exports = router;
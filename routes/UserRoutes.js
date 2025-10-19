const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControls');

router.get('/signup', userController.getSignup);
router.post('/signup', userController.postSignup);
router.get('/homePage', userController.getHomePage);
router.get('/userExist', userController.getUserExist);

module.exports = router;
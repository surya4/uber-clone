let express = require('express');
let router = express.Router();

// controllers
let riderController = require('../controllers/rider');
// let userController = require('../mongoControllers/user');
// let contactController = require('../mongoControllers/contact');

// index home page
// router.get('/', riderController.getIndex);


router.get('/', function(req, res) {
  console.log("12")
  // res.header('Access-Control-Allow-Origin', "*")
  res.render('index');
});

// // user profile page
// router.get('/profile', userController.ensureAuthenticated, userController.profileGet);
// router.put('/profile', userController.ensureAuthenticated, userController.profilePut);
// router.delete('/profile', userController.ensureAuthenticated, userController.profileDelete);


module.exports = router;
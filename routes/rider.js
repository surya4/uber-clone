let express = require('express');
let router = express.Router();

// controllers
let riderController = require('../controllers/rider');
// let userController = require('../mongoControllers/user');
// let contactController = require('../mongoControllers/contact');

// index home page
router.get('/', riderController.getIndexMap);

router.get('/', (req, res, next) => {
  riderController.getIndexMap()
  .then( (response) => {
    console.log("1", response)
    res.render('index', {
      'title': 'Uber Clone',
      'data' : response
  });
  resolve();
  })
  .catch((err) => {
    console.log("2", err)
    reject(err);
  })
});


// router.get('/', function(req, res) {
//   console.log("12")
//   // res.header('Access-Control-Allow-Origin', "*")
//   res.render('index');
// });

// // user profile page
// router.get('/profile', userController.ensureAuthenticated, userController.profileGet);
// router.put('/profile', userController.ensureAuthenticated, userController.profilePut);
// router.delete('/profile', userController.ensureAuthenticated, userController.profileDelete);


module.exports = router;
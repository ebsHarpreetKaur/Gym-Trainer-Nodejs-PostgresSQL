const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const authenticate = require('../middleware/authenticate');




router.post('/register', UserController.register);
router.get('/userlist', UserController.userlist);
router.post('/login', UserController.login);

router.get('/secure-route', authenticate, (req, res) => {
  res.json({ message: 'Secure Route Accessed!' });
});



module.exports = router;





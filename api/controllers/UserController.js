const User = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');



/**
 * @api {post} /register Register a new user
 * @apiName RegisterUser
 * @apiGroup Authentication
 * 
 * @apiParam {String} username
 * @apiParam {String} password
 * 
 * @apiSuccess {Object} user
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 OK
 *     {
 *       "username": "john",
 *       "password": "123456"
 *     }
 * 
 * @apiError InternalServerError An error occurred on the server.
 * 
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "error": "Internal Server Error"
 *     }
 */
exports.register = async (req, res) => {

    try {
        const { username, email, password } = req.body;
        
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({ username, email, password: hashedPassword });
        res.status(201).json(user);

      } catch (error) {

        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });

      }

};


exports.userlist = async (req, res) => {
    try {
        const user = await User.findAll();
        res.status(201).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};



exports.login = async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ where: { username } });
      if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
      const token = jwt.sign({ userId: user.id }, 'MIND_GROWTH', { expiresIn: '1h' });
      res.json({ 
        "auth_user": user,
        "access_token": token
    });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
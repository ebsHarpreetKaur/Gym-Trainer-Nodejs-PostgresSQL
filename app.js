var express = require("express");
var app = express();
const path = require("path");
const dotenv = require("dotenv")
const router = express.Router();
const sequelize = require('./api/config/database');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
dotenv.config({ path: path.resolve(__dirname, './.env') })

app.use('/mindgrowth/docs', express.static(path.join(__dirname, 'public/docs')));

async function connectToDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Connected to PostgreSQL database');
  } catch (error) {
    console.error('Error connecting to PostgreSQL database: ', error);
  }
}
connectToDatabase();




const userRoute = require("./api/routes/user");











// API end points
app.use("/user", userRoute);



app.use((req, res, next) => {
  res.status(404).json({
    error: "Bad Request",
  });
});

module.exports = app;

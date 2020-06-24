require('dotenv').config()
const express = require("express");
const app = express();
const apiRouter = require('./routes/api.router')
const authRouter = require('./routes/auth.router')

const bodyParser = require('body-parser')
const cors = require('cors')
const authJwt = require('./middlewares/authJwt')
//MONGO
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
//Đoạn này k rõ để làm gì
// app.use(function(req, res, next) {
//   res.header(
//     "Access-Control-Allow-Headers",
//     "x-access-token, Origin, Content-Type, Accept"
//   );
//   next();
// });
// our default array of dreams
const dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];
const Users = require('./model/users.model')
app.use('/api', authJwt.verifyToken, apiRouter)
app.use('/auth', authRouter)

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.send('Hello');
});

app.get('/test', async (req, res) => {
  //console.log('abc')
  let users = await Users.find()
  console.log(users)
  res.json(users)
})

// send the default array of dreams to the webpage
app.get("/dreams", (request, response) => {
  // express helps us take JS objects and send them as JSON
  response.json(dreams);
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});

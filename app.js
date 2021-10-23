
var express = require('express')
var mongo = require('mongodb')
var assert = require('assert')
let MongoClient = mongo.MongoClient;
const  ObjectID = mongo.ObjectId;
const app = express();
const PORT = 3000;

//ROUTES
var user_routes = require('./routes/user_routes')

var dbb = require('./configuration/collection')

var prod_url = require('./configuration/connection')

const url = prod_url

//CONFIGURING ROUTES
user_routes.configure(app, mongo, ObjectID, url, assert, dbb)

app.listen(PORT, () => {
        console.log(`server running on http://localhost:${PORT}`);
      });

// Mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('database conncted!');
//     
//   })
//   .catch((err) => {
//     console.log(err);
//   });

app.get('/', (req, res) => {
  res.send('<h1>Hello! Its working!.</h1>');
});

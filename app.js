var express = require('express');
var app = express();
const { auth } = require('express-openid-connect');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: 'http://localhost:3000',
  clientID: 'xBpssiqyLKJNhDVJTOM4RBlYyMaJZui9',
  issuerBaseURL: 'https://dev-vjwyveoro08wgkyx.us.auth0.com'
};

app.set("views","views");
app.set("view engine", "ejs");

// app.use(express.static("public"));

app.use(express.static('public'));
app.use(auth(config));

app.use("/", require("./routes/index"));

var port = 3000;

app.listen(port, () => {
    console.log('App is running on ' + port);
});
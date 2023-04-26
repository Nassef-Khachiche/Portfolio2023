const { createServer } = require("http");
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

const port = 8080;
const app = express();
const server = createServer(app);

app.use(
  session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: false,
    SameSite: true,
    cookie : {
      maxAge: 1000 * 60 * 60 * 24,
    },
}));

//sets up a middleware function so the server can use the json from requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("."));

// Set view engine
app.set("view engine", "ejs");
app.set('views', 'views');

  
server.listen(port, () => {
    console.log(`Portfolio2023 is live on localhost:${port}`);
});
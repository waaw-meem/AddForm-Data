// Importing Express Package
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const adminRoute = require('./routes/admin');
const userRoute = require("./routes/user");


app.set('view engine', 'ejs');
app.set('views', 'views');

// Body Parser Urlencoded 
app.use(bodyParser.urlencoded({ extended: false })); // Set extended to true

app.use(express.static(path.join(__dirname, 'public')));

app.use(adminRoute.routes);
app.use(userRoute);

app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found' });
  });

  app.listen(3000);

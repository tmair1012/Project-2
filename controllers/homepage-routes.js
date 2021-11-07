const app = require('express').Router();

// create login and password
app.get('/', (req, res) => {
    console.log("homepage-routes Test");
    res.render('homepage'  );
  });

  // Route to Login Page
app.get('/login', (req, res) => {
    console.log("login get called");
    res.render('login');
  });
app.post('/login', (req, res) => {
    // Insert Login Code Here
    console.log("login called");
    let username = req.body.username;
    let password = req.body.password;
    res.send(`Username: ${username} Password: ${password}`);
  });

  module.exports = app;
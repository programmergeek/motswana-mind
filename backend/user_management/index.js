const express = require('express')
const session = require('express-session');
const Keycloak = require('keycloak-connect');

const app = express();
const memoryStore = new session.MemoryStore();
const keycloak = new Keycloak({store: memoryStore}, 'keycloak.json');
const cors = require('cors');
const axios = require('axios');

port = 8888;

app.use(cors());

app.use(session({
  secret: 'DNGXrNgZ15z68aLxzzgPQq9QDjnneS',
  resave: false,
  saveUninitialized: true,
  store: memoryStore
}));

app.use(keycloak.middleware({store: memoryStore}));

app.post('/logout', keycloak.protect(), (req, res) => {
  req.session.destroy((err) => {
    if(err) {
      console.log(err);
    } else {
      res.redirect('/');
    }
  });
});

app.get('/api/auth/status', keycloak.protect(), async (req, res) => {

  // If the request reaches here, it means the user is authenticated
  // You can extract user information from req.kauth if needed
  const isAuthenticated = true;
  const userData = {
    username: req.kauth.grant.access_token.content.preferred_username,
    // Add more user data as needed
  };

  res.json({
    authenticated: isAuthenticated,
    user: userData
  });
  console.log("Data being returned:");
  console.log({
    authenticated: isAuthenticated,
    user: userData
  })
});


app.get('/user', keycloak.protect(), (req, res) => {
  const info = req.kauth.grant.access_token;//.content;
  res.json({ user: info });
  const username = info.preferred_username;
  console.log("NAME!!!!!!!!! ", username);
});

/* //checking for authentication
app.get('/authentication', keycloak.protect(), (req, res) => {
  res.json({ authenticated: keycloak.authenticated });
}); */

app.get('/', (req, res) => {
  res.redirect('/http://10.0.19.248:5173/');
});

//protected route
app.get('/login', keycloak.protect(), (req, res) => {
  res.redirect('http://10.0.19.248:5173/student_dashboard');
});


app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});

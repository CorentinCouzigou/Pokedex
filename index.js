const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const router = require('./app/router');
const PORT = process.env.PORT || 3000;
const sanitizer = require('sanitizer');
const expressSession = require('express-session');
// 

//   app.use((request, response, next) => {
//     let deck = null;
//     if (request.session.deck) {
//         deck = request.session.deck;
//     }
//     response.locals.deck = deck;
//     next();
//   });
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  for (const key in req.body) {
    req.body[key] = sanitizer.escape(req.body[key]);
  }
  next();
});

app.set('view engine', 'ejs');
app.set('views', 'app/views');
app.use(express.static('public'));

app.use(router);

app.listen(PORT, () => {
  console.log(`Serveur connecté http://localhost:${PORT}`);
});

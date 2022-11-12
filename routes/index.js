const express = require('express');
const data = require('../public/data.json');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', {
    title: 'Home page',
    links: data,
  });
});

/* GET linked pages. */
data.forEach(link => {
  router.get(link.stub, (req, res) => res.redirect(link.url));
});

module.exports = router;

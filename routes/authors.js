var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('authors/index')
});

router.get('/new', (req, res) => {
  res.render('authors/new')
});

router.post('/', (req, res) => {
  res.send('Create')
});

module.exports = router;

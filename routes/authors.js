var express = require('express');
var router = express.Router();
var Author = require('../models/author')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('authors/index')
});

router.get('/new', (req, res) => {
  res.render('authors/new', {author: new Author()})
});

router.post('/', (req, res) => {
  const author = new Author ({
    name : req.body.name
  })
  author.save((err, newAuthor)=>{
    if(err){
      res.render('authors/new',{
        author:author,
        errorMessage: 'Error Creating Author'
      })
    } else {
      // res.redirect(`authors/${newAuthor.id}`)
       res.redirect(`authors`)
    } 
  });
});

module.exports = router;

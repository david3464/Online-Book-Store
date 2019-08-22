var express = require('express');
var router = express.Router();

var Class = require('../models/class');

router.get('/', function(req, res, next) {
    Class.getClasses(function(err, classes){
        res.render('1-users/index.hbs', {classes: classes});
    },3);
});


router.get('/test', function(req, res, next) {
   res.render('1-test/test.ejs');
});
  

module.exports = router;
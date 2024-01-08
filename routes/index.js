var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Express' });
});


router.post('/show', function(req, res, next) {
  const data = req.body
  res.render('show', { data: data });
});


module.exports = router;

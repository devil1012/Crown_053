var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('crown_53', { title: 'Express',id:'204410053',name:'林嘉俊'});
});

module.exports = router;

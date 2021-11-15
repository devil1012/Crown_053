var express = require('express');
var router = express.Router();
const crown2Controller_53=require('../controllers/crown2Controller_53');

/* GET home page. */
router.get('/',crown2Controller_53.getCategories);

module.exports = router;

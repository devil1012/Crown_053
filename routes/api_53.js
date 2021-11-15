var express = require('express');
var router = express.Router();
const apiCrown2Controller_53=require('../controllers/apiCrown2Controller_53');

/* GET home page. */
router.get('/category_53',apiCrown2Controller_53.getCategories);

module.exports = router;

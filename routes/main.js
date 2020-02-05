var express = require('express');
var router = express.Router();
var main_controller = require('../controller/main');
router.get('/', main_controller.index);

module.exports = router;
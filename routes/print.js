var express = require('express');
var router = express.Router();
var print_controller = require('../controller/print');

router.get('/', print_controller.index);
router.get('/print/:route/:document', print_controller.print);

module.exports = router;
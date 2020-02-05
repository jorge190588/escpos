var express = require('express');
var router = express.Router();
var print_controller = require('../controller/print');

router.get('/', print_controller.index);
router.get('/print/:route/:document', print_controller.print);
router.get('/printer', print_controller.printer);
router.get('/printerStart', print_controller.printerStart);
router.get('/printerEnd', print_controller.printerEnd);
router.get('/printFolder/:route', print_controller.printFolder);

module.exports = router;
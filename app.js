var express = require('express');
var app = express();
var indexRoutes = require('./routes/main');
var printRoutes = require('./routes/print')

const hostname = '127.0.0.1';
const port = 3500;

app.use('/', indexRoutes);
app.use('/print', printRoutes);
app.use(express.static('public'));

app.listen(port, function () {
    console.log(`Server running at http://${hostname}:${port}/`);
});

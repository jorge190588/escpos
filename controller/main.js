
var Printer =require('../class/Printer');
var Document = require('../class/Document');
var document =  new Document();

exports.index = function(req, res) {
    res.send('<h1>Menu</h1>');
};


exports.print =  function(req,res){
    
    document.setPath("files/");
    let url = document.getPath();

    res.send('<h1>Imprimir documento</h1> <p>'+url+"</p>");
}


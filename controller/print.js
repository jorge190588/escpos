var path = require('path');
var Printer =require('../class/Printer');
var Document = require('../class/Document');
var document =  new Document();
var printer =  new Printer();
const filesFolder = "files_new";

exports.index = function(req, res) {
    res.sendFile(path.join(__dirname,'../html/print.html'));
};

exports.print =  async function(req,res){
    let routeParam=req.params.route;
    let documentParam = req.params.document;
    let path  =filesFolder+"/"+routeParam+"/"+documentParam+".txt";
    document.setPath(path);
    await printer.start();
    await printer.setContent(document.get());
    await printer.end();
    res.send(JSON.stringify({content: document.get() }));
}


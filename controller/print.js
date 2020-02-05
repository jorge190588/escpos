const fs = require('fs');
var path = require('path');
var Printer =require('../class/Printer');
var Document = require('../class/Document');
var document =  new Document();
const filesFolder = "files_new";

exports.index = function(req, res) {
    res.sendFile(path.join(__dirname,'../html/print.html'));
};

exports.printer  = function(req,res){
    res.send(JSON.stringify({content: printer.getPrinter()  }));
}

exports.printerStart  = async function(req,res){
    await printer.start();
    res.send(JSON.stringify({content: printer.getPrinter()  }));
}

exports.printerEnd  = async function(req,res){
    await printer.end();
    res.send(JSON.stringify({content: printer.getPrinter()  }));
}


exports.print =  async function(req,res){
    var printer =  new Printer();
    let routeParam=req.params.route;
    let documentParam = req.params.document;
    let path= filesFolder+"/"+routeParam+"/"+documentParam+".txt";
    document.setPath(path);
    await printer.start();
    await printer.setContent(document.get());    
    await printer.end();
    res.send(JSON.stringify({content: documentParam+" impreso"}));
}


exports.printFolder =  async function(req,res){
    var printer =  new Printer();
    let routeParam=req.params.route;
    let path = "";
    let files=[];
    
    await printer.start();
    files = await fs.readdirSync(filesFolder+"/"+routeParam);
    files.forEach(async (fileName) => {
        path= filesFolder+"/"+routeParam+"/"+fileName;
        document.setPath(path);
        await printer.setContent(document.get());    
    });
    await printer.end();
    res.send(JSON.stringify({content: files}));
}

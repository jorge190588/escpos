const fs = require('fs');
const path = require('path');

class Document{
    constructor(){
        this.documentPath = "";
        this.folderPath="";
        this.content="";
    }

    setPath(documentPath){
        this.documentPath=path.join(__dirname,"..",documentPath);
    }

    getPath(){ return this.documentPath}

    get(){
        this.content=fs.readFileSync(this.documentPath,'utf8');
        return this.content;
    }

    create(){
        this.setFolderPath();
        this.createDirectoryIfNotExists();
        return this.writeDocumentInDisk();   
    }
    
    setContent(content){
        this.content=content;
    }

    // internal
    setFolderPath(){

    }

    writeDocumentInDisk(){
        return new Promise(function(resolve, reject) {
            fs.writeFile(this.documentPath,this.content, function(err){
                if (err) reject(err);
                else resolve("done");
            });
        })
    }

    createDirectoryIfNotExists= ()=>{
        if (!fs.existsSync(this.folderPath)) {
            fs.mkdirSync(this.folderPath, {recursive: true});
        }
    }
}

module.exports = Document;
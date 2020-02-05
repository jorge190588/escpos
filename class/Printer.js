const PrinterAdapter = require('../escpost_libs/printer');
const USB = require('../escpost_libs/usb');

class Printer{
    constructor(){
        this.device = null;
        this.printer = null;
    }
    
    start = async () => {
        if (this.device===null)
            this.device = await USB.getDevice();
        if (this.printer===null)
            this.printer = await PrinterAdapter.create(this.device);
        
        await this.printer.size(1,1)
                    .font("B")
                    .marginLeft(0)
                    .marginRight(0);
    
        return new Promise((resolve, reject) => {
            resolve("done!");
        });   
    }

    end=async()=>{
        await this.printer.close();
    }

    setContent= async (textContent)=>{
        await this.printer.text(textContent).cut();
    }

    cut= async ()=>{
        await this.printer.cut();
    }
}

module.exports = Printer;
 
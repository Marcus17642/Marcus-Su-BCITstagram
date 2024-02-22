const path = require("path");
/*
 * Project: Milestone 1
 * File Name: main.js
 * Description:
 *
 * Created Date:
 * Author:
 *
 */
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');




const IOhandler = require("./IOhandler");
const zipFilePath = path.join(__dirname, "myfile.zip");
const pathUnzipped = path.join(__dirname, "unzipped");
const pathProcessed = path.join(__dirname, "grayscaled");
const pathProcessed2 = path.join(__dirname, "serpia")
const main = async () =>{
    try{
        console.log("1")
        await IOhandler.unzip(zipFilePath, pathUnzipped)
        console.log("2")
        const files = await IOhandler.readDir(pathUnzipped) 
        const rl = readline.createInterface({ input, output });
        rl.question('Pick what filter:\n1)Black and White', (answer) => {
            
            if(answer === "1"){
                IOhandler.filter(files, pathProcessed, answer)
            } 

            
            
            
            // IOhandler.grayScale(files, pathProcessed,answer)
            rl.close();
          });
        console.log("3")

    } catch (error){
        console.error(error)
    }
}
main()
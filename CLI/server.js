const fs = require('fs').promises;
const fsp = require('fs');
const path = require('path');
const http = require('http');
const { readdirSync, mkdir } = require('fs');

const port = 3400;

const runtimeenv = process.argv[2];
// console.log("runtimeenv is", runtimeenv);

const src = process.argv[3];


const method = process.argv[4]


const fileName = process.argv[5];


const content = process.argv[6];


const folderName = './fileManager';



const filePath = path.join(__dirname, 'fileManagerFolder', 'fileManager.js');


async function cli() {

    if (runtimeenv) {

        if (method === 'create') {

            console.log('file creation on the way');

            if (!fsp.existsSync('./fileMAnagerFOlder/fileManager.js')) {
                console.log('creating file');
                await fs.mkdir(src);
                read();
            }
            else {
                console.log('folder is empty');
            }

            console.log("Contents of the files are : ");


            if (content) {
                await fs.writeFile(filePath, content);
                console.log(content, "data stored");
            }

            else {
                console.log("content is not there");
            }

        }

        else if (method == 'read') {
            // console.log('reading  file');

            read();

        }
        else if (method == 'delete') {
            console.log('deleting  file');

            if (fsp.existsSync('./fileMAnagerFOlder/fileManager.js')) {

            await fs.unlink('./fileMAnagerFOlder/fileManager.js')
            .then(()=> console.log('file deleted'))
            .catch((error)=>console.log("error in deleting a file", error));
           
            }

            else{

                console.log("File doesn't not exist");

            }
        }

        else if (method == 'list') {

            const array = fsp.readdirSync('./fileMAnagerFOlder', { withFileTypes: true });

            console.log(array);
            array.forEach(fp => {
                
            
            if (fp.isDirectory()) {

                if(fsp.existsSync(fileName)){

                    console.log(fileName);
                    console.log("");

                }

            }
            });
        }

        else {

            console.log("Wrong method command");

        }

    }

    else if (runtimeenv == '--help') {
        console.log("to read the file  use :");
        console.log("node fileManager.js crereadate <filename> <content>");

        console.log("to create the file  use :");
        console.log("node fileManager.js create <filename> <content>");

        console.log("to delete the file  use :");
        console.log("node fileManager.js delete <filename> <content>");

        console.log("to list the file  use :");
        console.log("node fileManager.js list <filename> <content>");
    }

    else {

        console.log('Runtime Environment is not defined');

    }

}
async function read() {

    console.log("node is there");

    try {

        const file = await fs.readFile(filePath, 'utf8');
        console.log('File data:', file);


    }

    catch (error) {
        console.log("error", error);
    }

   

}

cli();

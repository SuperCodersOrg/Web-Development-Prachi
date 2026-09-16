// const fs = require('fs');
// const path = require("path");

// if (!fs.existsSync('DirectoryOpts')) {
//   fs.mkdirSync('DirectoryOpts');
// }

// if (!fs.existsSync('CopyDirectory')) {
//   fs.mkdirSync('CopyDirectory');
// }

// const src = process.argv[2];
// const file = process.argv[3];
// const dest = process.argv[4];
// console.log(src, file, dest);

// const filesArray = fs.readdirSync('DirectoryOpts', { withFileTypes: true });

// console.log(filesArray);

// function nonRecursive() {

//   filesArray.forEach((fp) => { 
//     console.log(fp);
//     console.log("new file", file);
//     if (fp.isFile()) {
//       if(fp.name===file){
//       console.log("this is a file", fp.name);
//       const source = path.join('DirectoryOpts', fp.name);
//       const destination = path.join('CopyDirectory', fp.name);
//       copyFiles(source, destination);
//     }
//     else{
//       fs.writeFileSync(source,destination);
//       console.log("This was does't exist but created in the directory");
//   }
//   }

//   })
// }
// nonRecursive();

// function recursive(src,des){
//   filesArray.forEach((fp) => { 
//     console.log(fp);
//     console.log("new file", file);

    
//     if(fp.isDirectory()){
//     console.log("true",fp.name);

//     const source=path.join('DirectoryOpts',fp.name);
//     const destination=path.join('CopyDirectory',fp.name);

//     if(!fs.existsSync(destination)){
//         fs.mkdirSync(destination);
//     }
//     fs.copyFileSync(source,destination);

//     // const srce=path.join(destination,fp.name);
//     recursive(source,destination);
//   }
//   else{ 
//     checkFile(source,destination);
//   }
//   })
// }
// recursive(src,dest);

// function checkFile(source,destination){
//   filesArray.forEach((fp) => { 
//     console.log(fp);
//     console.log("new file", file);
//     if (fp.isFile()) {
      
//       console.log("this is a file", fp.name);
//        source = path.join('DirectoryOpts', fp.name);
//        destination = path.join('CopyDirectory', fp.name);
//       copyFiles(source, destination);
   
//   }
 
//   })
// }now |
// filesArray.forEach((fp)=>{
//     console.log(fp);
//     console.log("new file",file);
//     // if(fp===file){
//     //    const source=path.join('DirectoryOpts',fp.name);
//     //    const destination=path.join('CopyDirectory',fp.name);
//     //     fs.copyFileSync(source,destination);
//     //     console.log("copied");
//     // }
//   if(fp.isDirectory()){
//     console.log("true",fp.name);

//     const source=path.join('DirectoryOpts',fp.name);
//     const destination=path.join('CopyDirectory',fp.name);

//     if(!fs.existsSync(destination)){
//         fs.mkdirSync(destination);
//     }
//     fs.copyFileSync(source,destination);

//     const srce=path.join(destination,fp.name);

//   }
//   else if(fp.isFile()){
//     console.log("this is a file",fp.name);
//      const source=path.join('DirectoryOpts',fp.name);
//        const destination=path.join('CopyDirectory',fp.name);
//         copyFiles(source, destination);
//   }
// })

// function nonRecursive(){

// }

// function copyFiles(source, destination) {
//   fs.copyFileSync(source, destination);
//   console.log("copied");
// }


const fs = require('fs');
const path = require("path");

if (!fs.existsSync('DirectoryOpts')) {
  fs.mkdirSync('DirectoryOpts');
}

if (!fs.existsSync('CopyDirectory')) {
  fs.mkdirSync('CopyDirectory');
}

const src = process.argv[2];
const file = process.argv[3];
const dest = process.argv[4];
console.log(src, file, dest);

// const filesArray = fs.readdirSync('DirectoryOpts', { withFileTypes: true });

// console.log(filesArray);

function nonRecursive() {
const filesArray = fs.readdirSync('DirectoryOpts', { withFileTypes: true });
  filesArray.forEach((fp) => { 
    console.log(fp);
    console.log("new file", file);
    if (fp.isFile()) {
      if(path.extname(fp.name)===file){
        console.log(path.extname(fp.name));
  
      const source = path.join('DirectoryOpts', fp.name);
      const destination = path.join('CopyDirectory', fp.name);
      copyFiles(source, destination);
  
  }
  }

  })
}


function recursive(src,dest){
const filesArray = fs.readdirSync(src, { withFileTypes: true });
filesArray.forEach((fp) => { 
      
  if(fp.isDirectory()){
    const source = path.join(src, fp.name);
      const destination = path.join(dest, fp.name);

    if(!fs.existsSync(destination)){
      fs.mkdirSync(destination);
    }

    recursive(source,destination);
    
  }
  else if(fp.isFile()) {
      if(path.extname(fp.name)===file){
        console.log(path.extname(fp.name));
  
      const source = path.join(src, fp.name);
      const destination = path.join(dest, fp.name);
      copyFiles(source, destination);
  
  }
  
  }
  })

}
recursive(src,dest);
nonRecursive();
function copyFiles(source, destination) {
  fs.copyFileSync(source, destination);
  console.log("copied");
}
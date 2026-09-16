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

//-------Non Recursive Function------

// function nonRecursive() {
// const filesArray = fs.readdirSync('DirectoryOpts', { withFileTypes: true });
//   filesArray.forEach((fp) => { 
//     console.log(fp);
//     console.log("new file", file);
//     if (fp.isFile()) {
//       if(path.extname(fp.name)===file){
//         console.log(path.extname(fp.name));
  
//       const source = path.join('DirectoryOpts', fp.name);
//       const destination = path.join('CopyDirectory', fp.name);
//       copyFiles(source, destination);
  
//   }
//   }

//   })
// }

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
// nonRecursive();
function copyFiles(source, destination) {
  fs.copyFileSync(source, destination);
  console.log("copied");
}
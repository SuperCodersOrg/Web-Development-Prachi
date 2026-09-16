const http = require('http');
const port = 3500;
const fs = require('fs');
const path = require('path');
const { json } = require('stream/consumers');

// console.log(http);

const server = http.createServer((req, res) => {

    let half = req.url.split('/');

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if(req.method==='OPTIONS'){
            res.sendStatus(200);
            return;
        }

    if ((req.url === '/' || req.url === '/home')) {
        res.statusCode = 200;
        res.statusMessage = "Successful";
        res.setHeader('content-type', 'application/json');

        const data = fs.readFileSync(path.join(__dirname,'data','home.json'),'utf8');
        // console.log(path.join(__dirname,'data','home.json'))
;        res.end(data);

    }
    else if (req.url === '/about') {
        res.statusCode = 200;
        res.statusMessage = "Successful";
       res.setHeader('content-type', 'application/json');

        const data = fs.readFileSync(path.join(__dirname,'data','about.json'),'utf8');
        res.end(data);

    }
    else if (req.url === '/course') {
        res.statusCode = 200;
        res.statusMessage = "Successful";
        res.setHeader('content-type', 'application/json');

        const data = fs.readFileSync(path.join(__dirname,'data','course.json'),'utf8');
        res.end(data);

    }
    else if (half[1] === 'course') {
        if (half[2] === 'bca') {
            res.statusCode = 200;
            res.statusMessage = "Successful";

            res.setHeader('Content-Type', 'application/json');
            
            const data = fs.readFileSync(path.join(__dirname,'data','bca.json'), 'utf8');

            res.end(data);

        }
        else if (half[2] === 'btech') {
            res.setHeader('Content-Type', 'application/json');
            
            const data = fs.readFileSync(path.join(__dirname,'data','btech.json'), 'utf8');
            res.end(data);

        }
        else if (half[2] === 'bcom') {
            res.setHeader('Content-Type', 'application/json');
            
            const data = fs.readFileSync(path.join(__dirname,'data','bcom.json'), 'utf8');
            res.end(data);

        }
        else if (half[2] === 'bba') {
           res.setHeader('Content-Type', 'application/json');
            
            const data = fs.readFileSync(path.join(__dirname,'data','bba.json'), 'utf8');
            res.end(data);
        }
    }
    else if (req.url === '/student') {
        res.statusCode = 200;
        res.statusMessage = "Successful";
        res.setHeader('content-type', 'application/json');

        const data = fs.readFileSync('student.json','utf8');
        res.end(data);

    }
    else if (req.url === '/contact') {
        res.statusCode = 200;
        res.statusMessage = "Successful";
res.setHeader('content-type', 'application/json');

        const data = fs.readFileSync(path.join(__dirname,'data','contact.json'),'utf8');
        res.end(data);

    }
    else if (req.url === '/facilities') {
        res.statusCode = 200;
        res.statusMessage = "Successful";
        res.setHeader('content-type', 'application/json');

        const data = fs.readFileSync(path.join(__dirname,'data','facilities.json'),'utf8');
        res.end(data);

    }
    else if (req.url === '/placement') {
        res.statusCode = 200;
        res.statusMessage = "Successful";

        const data = fs.readFileSync(path.join(__dirname,'data','placement.json'),'utf8');
        res.setHeader('content-type', 'application/json');
        res.end(data);
    
    }
    else if (req.url === '/registerstudents' && req.method==='GET') {
        res.statusCode = 200;
        res.statusMessage = "Successful";
        // res.setHeader('content-type', 'application/json');

        // const data = fs.readFileSync(path.join(__dirname,'data','registration.json'),'utf8');
        // res.end(data);
        req.body='';
        req.on('data',(dValue)=>{
            body+=dValue;
        })
    }
    else if(req.url==='/registerstudents' && req.method==='POST'){
    
        // const data=fs.readFileSync(path.join(__dirname,'data','registration.json'),'utf8');
        // res.setHeader('Content-Type','application/json');

        // res.end(data);
        // res.end("Data stored Successfully");
        // req.body='';
        // req.on('data',(dValue)=>{
        //     body+=dValue;
        // })
    }
    else if(req.url==='/style.css'){
        const data=fs.readFileSync(path.join(__dirname,'..','frontend','style.css'),'utf8');
        res.setHeader('Content-Type','text/css');
        res.end(data);
    }
    else if(req.url==='/style.js'){
        const data=fs.readFileSync(path.join(__dirname,'..','frontend','style.js'),'utf8');
        res.setHeader('Content-Type','text/javascript');
        res.end(data);
    }
    else {

        res.statusCode = 404;
        res.statusMessage = "Page Not Found";
        res.end("404 Page Not Found");
    }
})

server.listen(port, () => {
    console.log("server is running on port", port);
})
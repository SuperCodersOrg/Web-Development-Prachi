const http = require('http');
const port = 3500;
const fs = require('fs');
const path = require('path');

// console.log(http);

const server = http.createServer((req, res) => {

    let half = req.url.split('/');

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // if(req.method==='OPTIONS'){
    //     res.writeHead(200);
    //     res.end();
    // return;
    // }
    // if((req.url==='/' || req.url==='/home') && req.method==='GET'){
    //     res.statusCode=200;
    //     res.statusMessage="Successful";
    //     res.setHeader('content-type','text/html');
    //     const data=fs.readFileSync("frontend/index.html",'utf8');
    //     res.end(data);
    //     // res.end("home");
    // }
    if ((req.url === '/' || req.url === '/home')) {
        res.statusCode = 200;
        res.statusMessage = "Successful";
        res.setHeader('content-type', 'text/html');

        const data = fs.readFileSync('frontend/about.html', 'utf8');
        res.end(data);

    }
    else if (req.url === '/about') {
        res.statusCode = 200;
        res.statusMessage = "Successful";
        res.setHeader('content-type', 'text/html');

        const data = fs.readFileSync('frontend/home.html', 'utf8');
        res.end(data);

    }
    else if (req.url === '/course') {
        res.statusCode = 200;
        res.statusMessage = "Successful";
        res.setHeader('content-type', 'text/html');

        const data = fs.readFileSync('frontend/course.html', 'utf8');
        res.end(data);

    }
    else if (half[1] === '/course') {
        if (half[2] === '/bca') {
            res.statusCode = 200;
            res.statusMessage = "Successful";

            res.setHeader('Content-Type', 'text/html');
            const data = fs.readFileSync('frontend/bca.html', 'utf8');
            res.end(data);

        }
        else if (half[2] === '/btech') {
            res.setHeader('Content-Type', 'text/html');
            const data = fs.readFileSync('frontend/btech.html', 'utf8');
            res.end(data);

        }
        else if (half[2] === '/bcom') {
            res.setHeader('Content-Type', 'text/html');
            const data = fs.readFileSync('frontend/bcom.html', 'utf8');
            res.end(data);

        }
        else if (half[2] === '/bba') {
            res.setHeader('Content-Type', 'text/html');
            const data = fs.readFileSync('frontend/bba.html', 'utf8');
            res.end(data);
        }
    }
    else if (req.url === '/student') {
        res.statusCode = 200;
        res.statusMessage = "Successful";
        res.setHeader('content-type', 'text/html');

        const data = fs.readFileSync('frontend/student.html', 'utf8');
        res.end(data);

    }
    else if (req.url === '/contact') {
        res.statusCode = 200;
        res.statusMessage = "Successful";
        res.setHeader('content-type', 'text/html');

        const data = fs.readFileSync('frontend/contact.html', 'utf8');
        res.end(data);

    }
    else if (req.url === '/facilities') {
        res.statusCode = 200;
        res.statusMessage = "Successful";
        res.setHeader('content-type', 'text/html');

        const data = fs.readFileSync('frontend/facilities.html', 'utf8');
        res.end(data);

    }
    else if (req.url === '/placement') {
        res.statusCode = 200;
        res.statusMessage = "Successful";
        res.setHeader('content-type', 'text/html');
        const data = fs.readFileSync('frontend/placement.html', 'utf8');
        res.end(data);
    
    }
    else if (req.url === '/registerstudents' && req.method==='GET') {
        res.statusCode = 200;
        res.statusMessage = "Successful";
        res.setHeader('content-type', 'text/html');
        const data = fs.readFileSync('frontend/registerStudents.html', 'utf8');
        res.end(data);
    }
    else if(req.url==='/registerstudents' && req.method==='POST'){
        res.setHeader('Content-Type','text/html');
        
        const data=fs.readFileSync('frontend/style.js','utf8');

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
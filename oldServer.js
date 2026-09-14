const http=require('http');
const port =3300;
console.log(http);

const server=http.createServer((req,res)=>{// all req and response handle here
//     console.log(res); 
// res.end("hello from node js");
// res.statusCode=200;
// res.statusMessage="cjdds";
// res.setHeader('content-type','text/plain');
// // res.writeHead(200,{'content-type','text/plain'});
 

// res.write("hello,");
// res.end("hgello from node");

//User ki request ka response return kar raha h serever|

// user n jo requwst ki h uska url method and headers h
// console.log(req);
// console.log("URL:", req.url);
// console.log("Method:",req.method); // console is done here for debug
// console.log("Headers:",req.headers);
// res.end("Hello from node js");



if(req.url==="/home" || req.url==='/'){
    res.end("home page");
}
else if(req.url==='/contact'){
    res.end("contact page");
}
else if(req.url==='/about'){
    res.end("about page");
}
else if(req.url==='/login' && req.method==='GET'){
res.end("login page");
}
else if(req.url==='/login' && req.method==='POST'){
    res.end("login successful");
}
else{
    res.statusCode=404;
    res.end("Url not recoginsed PAGE NOT FOUND!");
}
})

server.listen(port,()=>{
    console.log("server is running onb port",port);
})//os ko batata h ki server chalana h is port s

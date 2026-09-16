const express=require('express');
const app=express();  
const fs=require('fs');
const path=require('path');

app.use(express.json());
const frontend=path.join(__dirname,"frontend");
app.use(express.static(frontend));
// const url=new URL()

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if(req.method==='OPTIONS'){
            res.sendStatus(200);
            return;
        }
        next();
})
app.get('/home',(req,res)=>{

     const data=fs.readFileSync(path.join(__dirname,'data','home.json'),'utf8');
    
    res.send(data);
    //  console.log(req.method,req.url);
    // console.log(req,res);//print

})

app.get('/about',(req,res)=>{
    const data=fs.readFileSync(path.join(__dirname,'data','about.json'),'utf8');
    res.send(data);
})

app.get('/course',(req,res)=>{
    const data=fs.readFileSync(path.join(__dirname,'data','course.json'),'utf8');
    res.send(data);
})
app.get('/course/:option',(req,res)=>{
    if(Number(req.params.option)){
        console.log("its a number");
        res.send(req.option);
    }
    console.log(req.params);
    const data=fs.readFileSync(path.join(__dirname,'..',"frontend",Option.html),'utf8');
    console.log(data);

    console.log(req.params.option);
    res.send(data);

    // console.log(req.query);
    // console.log(req.query.name);
    // res.send(req.query.name);
})

app.get('/student',(req,res)=>{
     const data=fs.readFileSync(path.join(__dirname,'data',"student.json"),'utf8');
    res.send(data);
})

app.get('/facilities',(req,res)=>{
    const data=fs.readFileSync(path.join(__dirname,'data','facilities.json'),'utf8');
    res.send(data);
})

app.get('/placement',(req,res)=>{
    const data=fs.readFileSync(path.join(__dirname,'data','placement.json'),'utf8');
    res.send(data);
})

app.get('/registerstudents',(req,res)=>{
    const data=fs.readFileSync(path.join(__dirname,'data','registerstudents.json'),'utf8');
    res.send(data);
})

app.post('/registerstudents',(req,res)=>{
    console.log(req.body);
    const data=req.data;
    
    console.log(data);
    res.send(data);
})

app.get('',(req,res)=>{
    res.send("Enter the data");
})

app.listen(3300,()=>{
    console.log("server is running on the port");
})
// console.log(app);// clone of express is pronted in the terminal
//console.log(express);// express whole info will be printed in it

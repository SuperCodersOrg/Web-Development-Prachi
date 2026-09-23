const express= require('express');
const app=express();

const fs=require('fs');
const path=require('path');
const { json } = require('stream/consumers');

app.use(express.json());

app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if(req.method==='OPTIONS'){
            // res.sendStatus(200);
          return res.status(200).send("successful");
        
        }
        next();
})

const frontend=path.join(__dirname,"frontend");
console.log(frontend);
app.use(express.static(frontend));

app.post("/addTask",(req,res)=>{

    const datas= req.body;
    // console.log(req.body);
    const file=fs.readFileSync(path.join(__dirname,'data','addTask.json'),'utf8');

    const task=JSON.parse(file);

    task.push(datas);
    fs.writeFileSync(path.join(__dirname,'data','addTask.json'),JSON.stringify(task,null,2),'utf8');
    // console.log(req.body);
    res.status(200).send(JSON.stringify(datas));
})

app.delete('/deleteTask/:id',(req,res)=>{
  
    const data=fs.readFileSync(path.join(__dirname,'data','addtask.json'),'utf8');
    console.log(data);
    const parseData=JSON.parse(data);

    // console.log(parseData);
    // console.log(typeof(req.body), req.body);
    // console.log(req.params, typeof(req.params.id), Number(req.params.id));

    let task=parseData.find((t)=> t.id==Number(req.params.id));
    // console.log(task);

    if(task){
        task.deleted="true";
    }

    // console.log(task);
    
    fs.writeFileSync(path.join(__dirname,'data','addTask.json'),JSON.stringify(parseData,null,2),'utf8');
    res.send(JSON.stringify(parseData));

})

app.get('/addTask',(req,res)=>{

const data=fs.readFileSync(path.join(__dirname,'data','addTask.json'),'utf8');

res.send(data);

})

app.put('/putTask/:id',(req,res)=>{

    console.log("data");

const data=JSON.parse(fs.readFileSync(path.join(__dirname,'data','addTask.json'),'utf8'));
// console.log(data);

const task=data.find((t)=>{
    return t.id == Number(req.params.id);
})
// let task=req.body;
if(!task){
    return res.status(404).send("Task not found");
}
console.log(req.body);

task.title=req.body.title;
task.description=req.body.description;
console.log(req.body.title);

console.log("task is :", task);
    fs.writeFileSync(path.join(__dirname,'data','addTask.json'),JSON.stringify(data,null,2),'utf8');

res.send(JSON.stringify(task));
})

app.patch('/patchTask/:id',(req,res)=>{
const data=JSON.parse(fs.readFileSync(path.join(__dirname,'data','addTask.json'),'utf8'));

const task=data.find((t)=>{
return t.id==Number(req.params.id)
})

if(!task){
     return res.status(404).send("Task not found");
}
console.log(task);
// let task=req.body;
    if (task.status == "pending") {
        task.status = "done";
    }
    else {
        task.status = "pending";
    }

    fs.writeFileSync(path.join(__dirname,'data','addTask.json'),JSON.stringify(data,null,2),'utf8');
console.log(task);
res.json(task);
})

app.listen(2000,()=>{
    console.log("Server started on the port",2000);
})
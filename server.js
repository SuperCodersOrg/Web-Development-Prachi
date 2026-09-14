const express=require('express');
const app=express();  // app m instance cretae hua h and http vala kaam express automatically kar raha h

app.get('/home',(req,res)=>{
    // res.send(frontend/about.html);//no need to send data type
    res.sendFile(__dirname,"frontend","home.html")
})

app.get('/about',(req,res)=>{
    res.send('frontend/about.html');//no need to send data type
})// to send json daata we use res.json

app.get('/course',(req,res)=>{
    res.send('frontend/course.html');//no need to send data type
})

app.get('/student',(req,res)=>{
    res.send('frontend/student.html');//no need to send data type
})

app.get('/facilities',(req,res)=>{
    res.send('frontend/facilities.html');
})

app.get('/placement',(req,res)=>{
    res.send('frontend/placement.html');
})

app.get('/registerstudents',(req,res)=>{
    res.send('frontend/registerStudents.html');
})

app.post('/registerstudents',(req,res)=>{
    res.send("Registration successful");
})
// console.log(app);// clone of express is pronted in the terminal
//console.log(express);// express whole info will be printed in it
app.listen(3300,()=>{
    console.log("server is running");
})

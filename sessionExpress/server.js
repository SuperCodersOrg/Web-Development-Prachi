// const express=require('express');
// const session = require('express-session');
// const  port= 3100;
// const app=express();
// const athosRoutes=require('./routes/auth.js');
// const studentRoutes=require("./routes/students.js");//
// const teacherRoue=require("./routes/teacher.js");//

//  const path = require('path');

// app.use(express.urlencoded({extended:true}));
// app.use(express.json());
// app.use(express.static(path.join(__dirname,'publc')));

// app.use(session({
//     secret: 'some secret',
//     cookie: {
//         maxAge: 1000 * 60 * 60 * 24,
//     },
//     resave: false,
//     saveUninitialized: false,
// }));

// app.get('/',(req,res,next)=>{
//     res.redirect('/index.html');
// })
// app.use('/students', studentRoutes);
// app.use('/teacher', teacherRoue);
// app.use('/auths', athosRoutes);
// // app.get('/student',(req,res)=>{
// //     // res.send("she talked bout he nothing");
// //     res.redirect();
// // })
// // app.get('/roles',(req,res)=>{
// //     // res.send(" provided");
// //     res.redirect('publc/teacherRole.html');
// // })

// app.listen(port,(req,res)=>{
//     console.log("Sever is on load!");
// })



const express=require('express');
const session = require('express-session');
const  port= 3100;
const app=express();
const authoRoutes=require("./routes/auth.js");
const studentRoutes=require("./routes/students.js");//
const teacherRoue=require("./routes/teacher.js");//

 const path = require('path');

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname,'publc')));

app.use(session({
    secret: 'some secret',
    cookie: {
        maxAge: 1000 * 60 * 60 * 24,
    },
    resave: false,
    saveUninitialized: false,
}));

app.get('/',(req,res,next)=>{
    res.redirect('/index.html');
})
app.use('/auth', authoRoutes);
app.use('/students',studentRoutes);
app.use('/teacher',teacherRoue);

// app.get('/student',(req,res)=>{
//     // res.send("she talked bout he nothing");
//     res.redirect();
// })
// app.get('/roles',(req,res)=>{
//     // res.send(" provided");
//     res.redirect('publc/teacherRole.html');
// })

app.listen(port,(req,res)=>{
    console.log("Sever is on load!");
})

const express=require('express');

const app=express();
app.set('view engine','ejs');

app.use(express.json());
const authROute=require('./routes/auth.js');
const path=require('path');

app.use(express.static(path.join(__dirname,'uploads')));



app.get('/',(req,res)=>{
res.render('index');
})
app.use('/auth',authROute);


app.listen(2800,(req,res)=>{
    console.log("Server is on load");
})
// const { isStringObject } = require("node:util/types");

let navv=document.getElementById("navv");
let mainPage=document.getElementById("mainPage");
navv.addEventListener("click",(e)=>{
    console.log(e.target.innerText);
    console.log("hello");
    fetch(`http://localhost:3300/${e.target.innerText}`)
    .then((res)=>{
        return res.json();
    })
    .then((res)=>{
        console.log(res);
        mainPage.innerHTML="";
        function printDa(res){

       for(let data in res){
        if(res=="registerstudents"){
            console.log("registered");
            
        }
        else{
        if(typeof(res[data])==="object" && res[data]!=null){

            printDa(res[data]);
            
        }
        else{
        mainPage.innerHTML+=`<p>${data}: ${res[data]}</p>`;
       }
    }
}
}
printDa(res);
    })

})

function handlingForm(){
let firstName=document.getElementById("firstname");
let Lastname=document.getElementById("Lastname");
let streetaddress=document.getElementById("streetaddress");
let Town=document.getElementById("Town/City");

let Postcode=document.getElementById("Postcode/Zip");
let Telephone=document.getElementById("Telephone");
let Mobile=document.getElementById("Mobile");
let email=document.getElementById("email");

let submit=document.getElementById("submit");

submit.addEventListener("click",(event)=>{
event.preventDefault();
console.log("event hodden");
let obj={
    fname: firstName.value,
    streetAdd: streetaddress.value,
    postcode: Postcode.value,
    mobile: Mobile.value,
    email: email.value,
}
dataArray.push(obj);
// setDataInLs();
fetch('/registerstudents',{
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(obj)
})
.then((res,err)=>{
    if(res){
       console.log(res);
    }
    else{
        console.log(err);
    }
})
dataPrint(obj);
})
}
handlingForm();
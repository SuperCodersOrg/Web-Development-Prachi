// const { isStringObject } = require("node:util/types");

let navv=document.getElementById("navv");
let mainPage=document.getElementById("mainPage");
navv.addEventListener("click",(e)=>{
    console.log(e.target.innerText);
    console.log("hello");
    if(e.target.innerText==="registerstudents"){
        handlingForm();
    }
    else{
    fetch(`http://localhost:3500/${e.target.innerText}`)
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
        mainPage.innerHTML+=`<p>${res[data]}</p>`;
       }
    }
}
}
printDa(res);
    })
    }
})

mainPage.addEventListener("click",(e)=>{
   fetch(`http://localhost:3500/course/${e.target.innerText}`)
    .then((res)=>{ 
        return res.json();
    })
    .then((res)=>{
        console.log(res);
        mainPage.innerHTML="";
        function printDa(res){

       for(let data in res){
        // if(res=="registerstudents"){
        //     console.log("registered");

        // }
        // else{
        if(typeof(res[data])==="object" && res[data]!=null){

            printDa(res[data]);
            
        }
        else{
        mainPage.innerHTML+=`<p>${data}: ${res[data]}</p>`;
       }
    // }
}
}
printDa(res);
    })
})


// function handlingForm(){
// let firstName=document.getElementById("firstname");
// let Lastname=document.getElementById("Lastname");
// let streetaddress=document.getElementById("streetaddress");
// let Town=document.getElementById("Town/City");

// let Postcode=document.getElementById("Postcode/Zip");
// let Telephone=document.getElementById("Telephone");
// let Mobile=document.getElementById("Mobile");
// let email=document.getElementById("email");

// // let dataArray=getDataFromLs("info");
// // createDataFromLs(dataArray);

// // function setDataInLs(){
// //     localStorage.setItem("UserInfo",JSON.stringify(dataArray));
// // }

// // function getDataFromLs(){
// //     let array=localStorage.getItem("UserInfo");
// //     console.log(array);
// //     if(!array){
// //         return [];
// //     }
// //     return JSON.parse(array);
// // }
// // function createDataFromLs(dataArray){
   
// //     dataArray.forEach(element => {
// //       dataPrint(element);
// //     });
// // }

// // function dataPrint(element){
// //           info.innerHTML+=`<tr>
// // <td>
// // ${res.fname}
// // </td>
// // <td>
// // ${res.lname}
// // </td>
// // <td>
// // ${res.streetAdd}
// // </td>
// // <td>
// // ${res.postcode}
// // </td>
// // <td>
// // ${res.mobile}
// // </td>
// // <td>
// // ${res.email}
// // </td>
// // </tr>`

// // }

// let submit=document.getElementById("submit");
// console.log(submit);
// submit.addEventListener("click",(event)=>{
// event.preventDefault();
// console.log("event hodden");
// let obj={
//     fname: firstName.value,
//     streetAdd: streetaddress.value,
//     postcode: Postcode.value,
//     mobile: Mobile.value,
//     email: email.value,
// }
// console.log(obj);
// // dataArray.push(obj);
// // setDataInLs();
// fetch(`http://localhost:3500/registerstudents`,{
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//     },
//     body: JSON.stringify(obj)
// })
// .then((res,err)=>{
//     if(res){
//        console.log(res);
//     }
//     else{
//         console.log(err);
//     }
// })
// // dataPrint(obj);
// })
// }
// handlingForm();
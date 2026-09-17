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

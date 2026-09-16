// let url=`http://localhost:3500/contact`;
let mainPage=document.getElementById("mainPage");
let about=document.getElementById("about");
// let u = window.location.pathname;

// u = "/" + u.split("/").pop().split(".")[0];
let u=window.location.pathname.replace(".html","");
u=u.replace("/assignment2/frontend","");
console.log(u);
// fetch(u,{
//     method: 'GET',
//     headers: {
//         'content-type':'application/json'
//     }
// })
// let u =window.location.pathname ;
// let url=new URL(u);
fetch(`http://localhost:3500${u}`)
.then((res)=>{
    return res.json();
})
.then((res)=>{
if(u==='/' || u==='/home'){
   let homeDiv = document.createElement("div");
    homeDiv.innerHTML = `
        <h2>${res.title}</h2>
            <p>${res.description}</p>
            <p>${res.highlights}</p>
            <h3>statistics:</h3>
            <p>${res.statistics.students}</p>
            <p>${res.statistics.faculty}</p>
            <p>${res.statistics.courses}</p>
            <p>${res.statistics.placementRate}</p>
`   
    mainPage.appendChild(homeDiv);
}
else if(u==='/about'){
    let homeDiv = document.createElement("div");
    homeDiv.innerHTML = `
        <h2>${res.collegeName}</h2>
            <p>${res.description}</p>
            <p>${res.location}</p>
            <p>${res.established}</p>
            <p>${res.description}</p>
            <p>${res.vision}</p>
            <p>${res.mission}</p>
            <p>${res.studentCount}</p>
            <p>${res.facultyCount}</p>
`   
    about.appendChild(homeDiv);
}
else if(u==='/course'){
    let homeDiv = document.createElement("div");
    homeDiv.innerHTML = `
        <h2>${res.title}</h2>
            <p>${res.description}</p>
            <p>${res.location}</p>
            <p>courses:</p>
`   
res.courses.forEach((t)=>{
    homeDiv.innerHTML+=`
                <div><p>${t.id}</p>
                <p>${t.name}</p>
                <p>${t.fullName}</p>
                <p>${t.duration}</p>
                <p>${t.seats}</p>
                <p>${t.eligibility}</p>
                <p>${t.mode}</p></div>`
            })
    mainPage.appendChild(homeDiv);
}
else if(u==='/course/bca'){
let homeDiv = document.createElement("div");
    homeDiv.innerHTML = `
        <h2>${res.name}</h2>
            <p>${res.shortName}</p>
            <p>${res.duration}</p>
            <p>${res.seats}</p>
            <p>${res.eligibility}</p>
            <p>${res.description}</p>
             <p>subjects:</p>
`   
res.subjects.forEach((t)=>{
 homeDiv.innerHTML +=`
 <p>${t}</p>
 `
})
 mainPage.appendChild(homeDiv);
}
else if(u==='/course/bba'){
    let homeDiv = document.createElement("div");
    homeDiv.innerHTML = `
        <h2>${res.name}</h2>
            <p>${res.shortName}</p>
            <p>${res.duration}</p>
            <p>${res.seats}</p>
            <p>${res.eligibility}</p>
            <p>${res.description}</p>
             <p>subjects:</p>
`   
res.subjects.forEach((t)=>{
 homeDiv.innerHTML +=`
 <p>${t}</p>
 `
})
 mainPage.appendChild(homeDiv);
}
else if(u==='/course/bcom'){
 let homeDiv = document.createElement("div");
    homeDiv.innerHTML = `
        <h2>${res.name}</h2>
            <p>${res.shortName}</p>
            <p>${res.duration}</p>
            <p>${res.seats}</p>
            <p>${res.eligibility}</p>
            <p>${res.description}</p>
             <p>subjects:</p>
`   
res.subjects.forEach((t)=>{
 homeDiv.innerHTML +=`
 <p>${t}</p>
 `
})
 mainPage.appendChild(homeDiv);   
}
else if(u==='/course/btech'){
   let homeDiv = document.createElement("div");
    homeDiv.innerHTML = `
        <h2>${res.name}</h2>
            <p>${res.shortName}</p>
            <p>${res.duration}</p>
            <p>${res.seats}</p>
            <p>${res.eligibility}</p>
            <p>${res.description}</p>
             <p>subjects:</p>
`   
res.subjects.forEach((t)=>{
 homeDiv.innerHTML +=`
 <p>${t}</p>
 `
})
 mainPage.appendChild(homeDiv); 
}
else if(u==='/student'){
   let homeDiv = document.createElement("div");
    homeDiv.innerHTML = `
        <h2>${res.title}</h2>
            <p>${res.totalStudents}</p>
            <p>${res.undergraduateStudents}</p>
            <p>${res.postgraduateStudents}</p>
            <p>${res.activeBatches}</p>
        `

 mainPage.appendChild(homeDiv); 
}
else if(u==='/contact'){
    let homeDiv = document.createElement("div");
    homeDiv.innerHTML = `
        <h2>Contact Details</h2>
            <p>${res.address}</p>
            <p>${res.phone}</p>
            <p>${res.email}</p>
            <p>${res.website}</p>
            <p>officeHours:</p>
`   
res.officeHours.forEach((t)=>{
    homeDiv.innerHTML+=`
                <div><p>mondayToFriday: ${t.mondayToFriday}</p>
                <p>saturday: ${t.saturday}</p>
                <p>sunday: ${t.sunday}</p>
                </div>`
            })
    mainPage.appendChild(homeDiv);
}
else if(u==='/facilities'){
   let homeDiv = document.createElement("div");
    homeDiv.innerHTML = `
        <h2>${res.title}</h2>
        <p>facilities:</p>
`   
res.facilities.forEach((t)=>{
    homeDiv.innerHTML+=`
                <div><p>name: ${t.name}</p>
                <p>description: ${t.description}</p>
                </div>`
            })
    mainPage.appendChild(homeDiv); 
    
}
else if(u==='/placement'){
    let homeDiv = document.createElement("div");
    homeDiv.innerHTML = `
        <h2>${res.title}</h2>
            <p>${res.placementRate}</p>
            <p>${res.studentsEligible}</p>
            <p>${res.studentsPlaced}</p>
            <p>${res.companiesVisited}</p>
            <p>${res.highestPackage}</p>
            <p>${res.averagePackage}</p>
            <p>topRecruiters:</p>
`   
res.topRecruiters.forEach((t)=>{
    homeDiv.innerHTML+=`<p>${t}</p>`
            });
homeDiv.innerHTML+=`<p>trainingPrograms:</p>`;
            res.trainingPrograms.forEach((t)=>{
    homeDiv.innerHTML+=`<p>${t}</p>`
            })
    mainPage.appendChild(homeDiv);
}
else if(u==='/registerstudents'){
   
}
})

// let firstName=document.getElementById("firstname");
// let Lastname=document.getElementById("Lastname");
// let streetaddress=document.getElementById("streetaddress");
// let Town=document.getElementById("Town/City");

// let Postcode=document.getElementById("Postcode/Zip");
// let Telephone=document.getElementById("Telephone");
// let Mobile=document.getElementById("Mobile");
// let email=document.getElementById("email");

// let dataArray=getDataFromLs("info");
// createDataFromLs(dataArray);

// function setDataInLs(){
//     localStorage.setItem("UserInfo",JSON.stringify(dataArray));
// }

// function getDataFromLs(){
//     let array=localStorage.getItem("UserInfo");
//     console.log(array);
//     if(!array){
//         return [];
//     }
//     return JSON.parse(array);
// }
// function createDataFromLs(dataArray){
   
//     dataArray.forEach(element => {
//       dataPrint(element);
//     });
// }



// // // function dataPrint(element){
// //     fetch('/registerstudents')
// //     .then((res,err)=>{
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
// //     })

// // // }

// let submit=document.getElementById("submit");
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
// dataArray.push(obj);
// setDataInLs();
// fetch('/registerstudents',{
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
// dataPrint(obj);
// })
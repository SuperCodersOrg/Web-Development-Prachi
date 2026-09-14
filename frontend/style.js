let firstName=document.getElementById("firstname");
let Lastname=document.getElementById("Lastname");
let streetaddress=document.getElementById("streetaddress");
let Town=document.getElementById("Town/City");

let Postcode=document.getElementById("Postcode/Zip");
let Telephone=document.getElementById("Telephone");
let Mobile=document.getElementById("Mobile");
let email=document.getElementById("email");

let dataArray=getDataFromLs("info");
createDataFromLs(dataArray);

function setDataInLs(){
    localStorage.setItem("UserInfo",JSON.stringify(dataArray));
}

function getDataFromLs(){
    let array=localStorage.getItem("UserInfo");
    console.log(array);
    if(!array){
        return [];
    }
    return JSON.parse(array);
}
function createDataFromLs(dataArray){
   
    dataArray.forEach(element => {
      dataPrint(element);
    });
}

function dataPrint(element){
  info.innerHTML+=`<tr>
<td>
${element.fname}
</td>
<td>
${element.lname}
</td>
<td>
${element.streetAdd}
</td>
<td>
${element.postcode}
</td>
<td>
${element.mobile}
</td>
<td>
${element.email}
</td>
</tr>`
}
let submit=document.getElementById("submit");
submit.addEventListener("click",(event)=>{
event.preventDefault();
console.log("event hodden");
let obj={
    fname: firstName.value,// prachi use value to get any value from input we dont use textcontent in this casemyeah maine change kia hai aap baki kar ke dekho
    lname: Lastname.value,
    streetAdd: streetaddress.value,
    postcode: Postcode.value,
    mobile: Mobile.value,
    email: email.value,
}
dataArray.push(obj);
setDataInLs();

dataPrint(obj);
})
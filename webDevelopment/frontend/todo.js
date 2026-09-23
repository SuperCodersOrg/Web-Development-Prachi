// const { METHODS } = require("node:http");

let mainFrame = document.createElement("div");
//mainFrame.classList = "m-5 bg-stone-300 h-screen";

let frame = document.createElement("div");
frame.classList = "bg-stone-300 shadow-lg m-5";

const done = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>`;
const undone = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-check-icon lucide-check-check"><path d="M18 6 7 17l-5-5"/><path d="m22 10-7.5 7.5L13 16"/></svg>`;

let h1 = document.createElement("h1");
h1.innerText = "TODO LIST";
h1.classList = "text-5xl text-taupe-600 text-shadow-lg font-mono shadow-md m-5 text-center p-5 -center";
mainFrame.appendChild(h1);

let url = `http://localhost:2000/`;

//Input
let inputBox = document.createElement("div");
inputBox.innerHTML = `<input type="text" id="titleId" placeholder="Enter Title" class="text-2xl text-stone-600 shadow-xl rounded-xl m-5 p-2">`;

let descriptionBox = document.createElement("div");
descriptionBox.innerHTML = `<textarea  id="descriptionID" placeholder="Enter Description"class="text-stone-600 h-17 text-2xl m-5 p-2 shadow-xl rounded-xl"></textarea>
<button id="addBtn" class="text-taupe-600 text-3xl" onclick="createDiv()"><i class="fa-solid fa-plus"></i></button>`;

//output Box
let resultDiv = document.createElement("div");
resultDiv.classList = "shadow-xl rounded-xl";

let isEditing = false;
let idOfTask;

let isDeleted = false;
//Local Storage

// let tasks = getTaskFromLocalStorage();
let tasks=[];

  getTaskFromLocalStorage();

// buildTaskFromLocalStorage();
// function buildTaskFromLocalStorage() {
//   for (let task of tasks) {
//     printingTaskOut(task);
//   }

//   // for(let task of tasks){
//   //   printingTaskOut(task.title, task.description, task.id, task.dateString, task.status);
//   // }
// }

//outputBox
function createDiv() {
  let inpValue = document.getElementById("titleId");
  let descValue = document.getElementById("descriptionID");

  let titlevalueBox = inpValue.value.trim();
  let DescriptionvalueBox = descValue.value.trim();

  if (titlevalueBox == "" || DescriptionvalueBox == "") {
    Swal.fire({
      title: "Warning",
      text: "Please enter title and description",
      icon: "warning",
    });
    return;
  }

  if (isEditing) {
    // let taskBox = document.getElementById(idOfTask);
    // console.log(taskBox);
    // if(taskBox){
    // let childNodes = taskBox.children;

    // childNodes[0].innerText = titlevalueBox;
    // childNodes[1].innerText = DescriptionvalueBox;

    // console.log(childNodes[0]);
    // console.log(childNodes[1]);
    // }
    // let addBtn = document.getElementById("addBtn");
    // addBtn.innerHTML = `<i class="fa-solid fa-plus"></i>`;

    // isEditing = false;

    fetch(`http://localhost:2000/putTask/${idOfTask}`, {//id
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
        title: titlevalueBox,
        description: DescriptionvalueBox
    })
  })
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    tasks.forEach((task) => {
    let taskBox = document.getElementById(idOfTask);
      taskBox.querySelector(".titleValueBox").innerText=res.title;
       taskBox.querySelector(".DescriptionvalueBox"),innerText=res.description;
      
       isEditing = false;
      idOfTask=null;

      inpValue.value = "";
  descValue.value = "";
      // if (task.id == idOfTask) {
      //   task.title = titlevalueBox;
      //   task.description = DescriptionvalueBox;

      //   console.log(task.title, task.description);
      // }

      let addBtn = document.getElementById("addBtn");
    addBtn.innerHTML = `<i class="fa-solid fa-plus"></i>`;


    });
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
    
  // inpValue.value = "";
  // descValue.value = "";
    
  }
  else {
    let id = new Date().getTime();
    let dateString = new Date().toLocaleString();
    let status = "pending";
    let isDeleted=false;
    // let iscompleted=false;
    //local storage data adding
    // tasks.push({ title: titlevalueBox, description: DescriptionvalueBox, id: id, dateString: dateString, status: status });
    let task = { title: titlevalueBox, description: DescriptionvalueBox, id: id, dateString: dateString, status: status, deleted: isDeleted}
    tasks.push(task);
  
    saveTaskInLocalStorage(task);

    if (!task.deleted) {//isdeleted
      printingTaskOut(task);
    }
    console.log( inpValue.value = "");
  inpValue.value = "";
  descValue.value = "";
  }
}

function printingTaskOut(res) {
  let newTask = document.createElement("div");
 
  newTask.id = res.id;

  newTask.innerHTML += `
  <h1 id="titlevalueBox" class="text-2xl m-5 p-2 space-x-46">${res.title}</h1>
  <h1 id="DescriptionvalueBox" class="text-2xl  rounded-xl m-5 p-2">${res.description}</h1>
  <h4 class="m-5 p-2">${res.dateString}</h4>

<button class="text-4xl shadow-xl rounded-xl m-5 p-2" onclick="deleteTask(${res.id})"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash2-icon lucide-trash-2"><path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
</button><button id="doneBtn" class="text-xl shadow-xl rounded-xl m-5 p-2" onclick="undoDo(${res.id})" data-status="done">${done}</button><button id="edit" class="text-xl shadow-xl rounded-xl m-5 p-2" onclick="editTask(${res.id})" data-status="pending"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-pen-icon lucide-square-pen"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"/></svg></button>`
  newTask.className = "shadow-xl"
  resultDiv.appendChild(newTask);
}

function deleteTask(id) {
  //delete from ui
  let task = document.getElementById(id);
  console.log(id);
  // if (task) {
  //   task.remove();
  // }
  
  fetch(`http://localhost:2000/deleteTask/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    // body: JSON.stringify({id})
  })// tasks = tasks.filter((t) => t.id != id);
    .then((res) => {
      return res.json();
    })
    .then((res) => {

      console.log(res);
      // tasks = tasks.filter((t) => t.id != id);
    getTaskFromLocalStorage();
    })
    .catch((err) => {
      console.log(err);
    })

}

function saveTaskInLocalStorage(tasks) {
  // localStorage.setItem("tasks", JSON.stringify(tasks));
  fetch(`http://localhost:2000/addTask`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(tasks)
  })
    .then((res) => {
      if (res) {
        
        console.log("Successful");
        return res.json();
      }
      else {
      console.log("error");
      }
    })
    .catch((err)=>{
console.log(err)
  
    })
}

function getTaskFromLocalStorage() {
  
   fetch(`${url}addTask`)
    .then((res) => {

      return res.json();
    })
    .then((res) => {
      
      tasks = res;
      for (let result of res) {
        if (!result.deleted) {

          printingTaskOut(result);

          let task = document.getElementById(result.id);
          let doneBtn = task.querySelector("#doneBtn");

          if (result.status == "done") {

            doneBtn.innerHTML = undone;
            doneBtn.setAttribute("data-status", "done");
            task.classList.add("bg-stone-400");

          }
          else {

            doneBtn.innerHTML = done;
            doneBtn.setAttribute("data-status", "pending");
            task.classList.remove("bg-stone-400");

          }
        }
      }
      console.log(res);
    })
    .catch((err) => {
     
      return err;
    })
}

function undoDo(id) {
  let task = document.getElementById(id);

  if (!task)
    return;

  let doneBtn = task.querySelector("#doneBtn");
  // let isDone = doneBtn.dataset.status == "done";

  // console.log(isDone);
  
  fetch(`http://localhost:2000/patchTask/${id}`,
   { method: "PATCH",
    headers: {
      "Content-Type":"application/json",
    },
    }
  )
  .then((res)=>{
    console.log(res);
    return res.json();
  })
  .then((res)=>{
    console.log("succes",res);
//     if (res.status=="done") {
    
//     console.log("inside isdone");
//     doneBtn.innerHTML = undone;
//     doneBtn.setAttribute("data-status", "done");
//     task.classList.add("bg-stone-400");
//   }
//   else {
//     console.log("inside not isdone");
//     doneBtn.innerHTML = done;
//     doneBtn.setAttribute("data-status", "pending");
//     // task.classList.remove("bg-stone-400");
//   }
//   console.log(task.innerHTML);
// // getTaskFromLocalStorage();
//   // task.classList.toggle("bg-stone-400");

    console.log(res);

  })
  .catch((err)=>{
    console.log(err);
  })

}

function editTask(id) {
  
  let task = tasks.find((t) => t.id == id);
  console.log(task.title);
  console.log(task.description);

  if(!task){
    return;
  }
  isEditing = true;
  idOfTask = id;

  let inputBoxValue = document.getElementById("titleId");
  let descriptionBoxValue = document.getElementById("descriptionID");

  inputBoxValue.value = task.title;
  descriptionBoxValue.value = task.description;

  let editBtn = document.getElementById("addBtn");
  editBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pen-line-icon lucide-pen-line"><path d="M13 21h8"/><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/></svg>`;
  // saveTaskInLocalStorage();

  //  fetch(`${url}putTask/${idOfTask}`,{
  //   method: "PUT",
  //   headers: {"Content-Type": "application/json"},
  //   body: JSON.stringify({
  //     title: inputBoxValue,
  //     description: descriptionBoxValue,
  //   })
  // })
  //   .then((res) => {

  //     return res.json();
  //   })
  //   .then((res) => {
  //     console.log(res);
  //     // tasks = res;
  //     getTaskFromLocalStorage();
  //     // for (let result of res) {
  //       // if (!result.deleted) {
  //       //   console.log(result);
  //         // printingTaskOut(result);

  //         // tasks.push(result);
  //       // }
  //     // }
  //     // return res;
  //   })
  //   .catch((err) => {
  //     // console.log(err);
  //     return err;
  //   })


}

frame.appendChild(inputBox);
frame.appendChild(descriptionBox);

frame.appendChild(resultDiv);

mainFrame.appendChild(frame);
document.body.appendChild(mainFrame);

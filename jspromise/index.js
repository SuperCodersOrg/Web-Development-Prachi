const data= async function print(){
    console.log("xyz");

    await console.log("f");
    console.log("gshs");
    await console.log("shd");
    console.log("end");

}
data();
console.log("after");
console.log("byy");
console.log("ss");
console.log("ss");
console.log("ss");
console.log("ss");
console.log("ss");
console.log("ss");
console.log("ss");
console.log("ss");


const view=async function vw(){
    console.log("hii");
    await console.log("started");
    setTimeout(()=>{
        console.log("timer started");
    },2000);
}
view();


const p1= new Promise((resolve)=>{resolve("1st")});

const p2= new Promise((res,reject)=>{
    res("resolved");
})

const p3 = new Promise((res,reject)=>{
    res("completed")
})

const promises=[p1,p2,p3];
Promise.any(promises).then((value)=>{
console.log(value);
})

Promise.all(promises).then((value)=>{
console.log(value);
})

Promise.allSettled(promises).then((value)=>{
console.log(value);
})
Promise.race(promises).then((value)=>{
console.log(value);
})
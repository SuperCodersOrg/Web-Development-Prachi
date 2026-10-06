const data= async function print(){
    console.log("xyz");

    await console.log("f");
    await console.log("shd");
    console.log("end");

}
data();
console.log("after");

const p1= new Promise((res,reject)=>{
    res((data)=>{
        console.log("completed");
    })

    
})
const p2= new Promise((res,reject)=>{
    res((data)=>{
        console.log("completed");
    })

    
})
const p3= new Promise((res,reject)=>{
    res((data)=>{
        console.log("completed");
    })

})

const promises=[p1,p2,p3];
Promise.any(promises).then((value)=>{
console.log(value);
})
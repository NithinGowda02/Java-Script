function asynFunc1() {
    return new Promise((resolve, reject) => {
    console.log("Fetching Data-1....");    
    setTimeout(() => {
        console.log("Data Found.");
        resolve("success");
    },3000)
});
}
function asynFunc2() {
    return new Promise((resolve, reject) => {
    console.log("Fetching Data-2....");    
    setTimeout(() => {
        console.log("Data Found.");
        resolve("success");
    },3000)
});
}

let p1 = asynFunc1();
p1.then((res) => {
    console.log(res);
    let p2 = asynFunc2();
    p2.then((res) => {
        console.log(res);
    })
})



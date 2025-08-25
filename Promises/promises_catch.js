function asynFunc1() {
    return new Promise((resolve, reject) => {
    console.log("Fetching Data-1....");    
    setTimeout(() => {
        console.log("Data Not Found.");
        reject("Error Found While fetching Data");
    },3000)
});
}
function asynFunc2() {
    return new Promise((resolve, reject) => {
    console.log("Fetching Data-2....");    
    setTimeout(() => {
        console.log("Data not Found.");
        reject("Error Found while fetching Data-2");
    },3000)
});
}

let p1 = asynFunc1();
p1.catch((err) => {
    console.log(err);
    let p2 = asynFunc2();
    p2.catch((err) => {
        console.log(err);
    })
})



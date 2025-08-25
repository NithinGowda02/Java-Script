function asynFunc1() {
    return new Promise((resolve, reject) => {
    console.log("Fetching Data-1....");    
    setTimeout(() => {
        console.log("Data Found.");
        resolve("success");
    },3000)
});
}
let p1 = asynFunc1();



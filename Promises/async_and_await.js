function greet(id) {
    const names = ["Nithin","Gagan","Madan","Rahul"];
    for(let name of names){
        console.log(`Hello!, Welcome ${name} @ ${id}`);
    }   
}

async function welcome() {
    greet(1);    
}

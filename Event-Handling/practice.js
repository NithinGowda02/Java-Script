let btn1 = document.querySelector("button");
btn1.onclick = () => {
    console.log("Click me slowly....");
    for(let i=1;i<=10;i++){
        console.log(i);
    }
    console.log("you successfully printed number from 1 to 10.. Thank you");    
}

let box = document.querySelector("div");
box.onmouseover = () => {
    console.log("you are on top of me...")
    
}
let btn = document.querySelector("button");
let body = document.querySelector("body");
let cur_mode = "light";
btn.addEventListener("click", () => {
    if (cur_mode === "light") {
        cur_mode="dark";
        body.classList.add("dark");
        body.classList.remove("light");
        
    }
    else{
        cur_mode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(cur_mode);
    }
)
let boxes = document.querySelectorAll(".box");
idx = 1
for(let box of boxes){
    box.innerText += ` Value ${idx}`;
    idx++;
}
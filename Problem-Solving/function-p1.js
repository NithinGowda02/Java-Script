function fibonacci(str){
    let string = str.split("");
    let reversed_str = string.reverse();
    reversed_str = reversed_str.join("");
    if(str === reversed_str){
        console.log(`${str} is a fibonacci >> ${reversed_str}`);
    }
    else{
        console.log(`${str} is not a fibonacci >> ${reversed_str}`);
    }     
}
fibonacci("madam");    

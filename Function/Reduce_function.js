let n = prompt("Ente a number >> ");
let sum = [];
for (let i=1;i<=n;i++){
    sum[i-1]=i;
}
console.log(sum);

let result = sum.reduce((res,next) => {
    return (res + next);
})
console.log(result)
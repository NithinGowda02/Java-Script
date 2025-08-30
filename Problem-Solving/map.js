arr = [24, 37, 23, 78, 98];
const newArr = arr.map((val) => {
    return `Square of ${val} is >> ${val*val}`;
})
console.log(newArr);
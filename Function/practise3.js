const number = [1,2,3,4,5,6,7,8,9,10];
const suareNumber = number.map((val) => {
    return val * val;
})
console.log(suareNumber); // Output: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

const number1 = [1,2,3,4,5,6,7,8,9,10];
number1.filter((next, cur) => {
    return next > cur ? next : cur;
})

console.log(number1); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] (This will not filter correctly; it should be a condition to filter values)
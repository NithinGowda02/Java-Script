let marks = [85, 90, 78, 92, 88];
let total = 0;
for(let mark of marks) {
    total += mark;
}
let average = total / marks.length;
console.log(`Average Marks: ${average}`);
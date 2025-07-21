const DayOfWeek = new Date().getDay();
let day1;
switch (DayOfWeek) {
    case 0:
        day1 = "Sunday";
        break;
    case 1:
        day1 = "Monday";
        break;
    case 2:
        day1 = "Tuesday";
        break;
    case 3:
        day1 = "Wednesday";
        break;
    case 4:
        day1 = "Thursday";
        break;
    case 5:
        day1 = "Friday";
        break;
    case 6:
        day1 = "Saturday";
        break;
}
console.log(`Today is ${day1}`);
console.log("Have a great day!");
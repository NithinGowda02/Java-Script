arr = [12, 14, 7, 4, 8, 9];

arr.forEach((val) => {
    console.log(`Square of ${val} is >> ${val*val}`);
});

const squareNum = (val) => {
        console.log(`Square of ${val} is >> ${val*val}`);
    }

arr.forEach(squareNum);
const employee = {
    calcTax() {
        console.log("tax rate is high");
    },
};

const karanArjun = {
    salary: 50000,
};

karanArjun.__proto__ = employee;
console.log(karanArjun.calcTax());
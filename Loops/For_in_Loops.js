const data = {
    Name:"Nithin K P",
    Age: 21,
    Email: "nithinkp123@gmail.com",
    Address: "Kottayam, Kerala",
}
for(let key in data) {
    console.log(`${key}: ${data[key]}`);
}
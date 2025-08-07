let companies = ["Bloomberg","microsoft","uber","Google","IBM","Netflix"];
console.log(companies);
// remove an first company from array
companies.shift();
console.log(companies);
// Remove Uber & Add Ola in its place
companies.splice(1,1,"Ola");
console.log(companies);
// Add Amazon at the end
companies.push("Amazon");
console.log(companies);
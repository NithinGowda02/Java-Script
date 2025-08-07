let items_price = [250,645,300,900,50];
let i=0;
for(let cost of items_price){
    console.log(`cost of item at index ${i} : ${cost}`);
    let discount = cost/10;
    items_price[i] -= discount;
    console.log(`cost of item After discount at index ${i} : ${items_price[i]}`);
    i++; 
}
 

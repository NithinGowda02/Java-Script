class Car {
    constructor(brand, model, price){
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
    DisplayInfo() {
        console.log(`Toyota is launching new Brand ${this.brand} of model ${this.model} with price ${this.price}.`)
    }
}
class newToyota extends Car{
    display() {
        console.log(`Car Name : ${this.brand}\n Model : ${this.model}\n Price : ${this.price}`);
    }
}

Innova = new newToyota("Innova","2025","450000");
Innova.DisplayInfo();
Innova.display();
class Bike {
    constructor(brand, model, price){
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
    display(){
        console.log(`you brought ${this.brand} of model ${this.model} with price ${this.price}`);
    }
}

class xpulse extends Bike{
    constructor(brand, model, price){
        super(brand,model,price);
    }
    features(){
        super.display();
    }
}
 let xpulse210 = new xpulse(210,"xpulse 210",2025, 250000);
 xpulse210.features();
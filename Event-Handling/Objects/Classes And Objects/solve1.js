class Toyota {
    carInfo(brand, model, price){
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
    DisplayInfo() {
        console.log(`Toyota is launching new Brand ${this.brand} of model ${this.model} with price ${this.price}.`)
    }
}

 fortuner = new Toyota();
 fortuner.carInfo("Fortuner", "2025", "500000");
 fortuner.DisplayInfo()

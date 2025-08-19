class user {
    constructor(Name, Email){
        
        this.Name = Name;
        this.Email = Email;
    }

    View_Data(){
        console.log(`Name = ${this.Name}\nEmail = ${this.Email}`);
    }
    
}
class Admin extends user{
    constructor(Name, Email){
        super(Name, Email);
    }
    modify(){
        super.View_Data();
    }
}

let student1 = new user("Nithin K P","nithinkp368@gamil.com");
let admin1 = new Admin("MITadmin","mitcse123@gmail.com");

student1.View_Data();
admin1.modify();
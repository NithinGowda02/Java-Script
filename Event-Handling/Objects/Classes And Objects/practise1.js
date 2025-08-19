class user {
    constructor(Name, Email){
        this.Name = Name;
        this.Email = Email;
    }
    View_Data(){
        console.log(`Name = ${this.Name}\nEmail = ${this.Email}`);
    }
}
let student = new user("Nithin K P","nithinkp368@gmail.com");
student.View_Data();
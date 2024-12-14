//You are creating a website for your college. create a class User with 2 properties name and email. it also has a method called viewData() that allows user to view website data.

class User{
    constructor(name, email){
      this.name = name;
      this.email = email;
    }

    viewData(){
        console.log(this.name)
        console.log(this.email)
    }
}

let u1 = new User("Ani", "apt@")
u1.viewData();


//create a new class called Admin which inherits from user. add a new method called edit data to Admin that allows it to edit website data


class Admin extends User {
    constructor(name, email){
          super(name, email)
    }

    editData(name, email){
       super.name = name
       super.email = email
    }
}

let a1 = new Admin("Rudra", "123@")
a1.editData("NewName", "234@")
a1.viewData()
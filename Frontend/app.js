// The constructor method is a special method of a class for creating and initialising an object instance of that class
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`Hi,my name is ${this.name}`);
    }
}
let p1 = new Person("adam",25);
let p2 = new Person("eve",25);
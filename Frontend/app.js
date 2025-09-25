// Factory Function
function PersonMaker(name,age){
    const person = {
        name: name,
        age: age,
        talk(){
            console.log(`Hi,my name is ${this.name}`);
        },
    };
    return person;
}

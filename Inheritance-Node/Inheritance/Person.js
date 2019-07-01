class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    personDetails(){
        return this.name + this.age;
    }
}

var per = new Person("Nishanth",30);

module.exports = {
   per

}
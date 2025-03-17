class Person 
{
    constructor(name, age)
    {
        this.name = name;
        this.age = age;

    }
    calling()
    {
     console.log(`Name is ${this.name} and age is ${this.age}`);
    
    }
}

const person1 = new Person("Dev Be Tu", 22);
const person2 = new Person("Be Tu", 21);

person1.calling();
person2.calling();

// What about accepting the inputs from the user!?
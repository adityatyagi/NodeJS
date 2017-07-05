// Prototypal Inheritance and Function Constructors

var human = {
    legs : 2,
    hands : 2,
    head: 1
};

var person = {
    firstName: "Aditya",
    lastName: "Tyagi",
    age: 24,
    greet : function(){
        console.log("Hi, this is aditya");
    },
    address: {
        street: "WZ-59 A Basai Darapur",
        city: "New Delhi",
        pincode: 110015
    }
};

// Now if i want to add a certain property to both of these objects, I have to do it seprately.
// We use function constructors to add such common properties

function Person(firstname,lastname) // Name of the function constructors start with capital letter
{
    this.firstname = firstname;
    this.lastname = lastname;
};

var john = new Person('John', 'Doe');

console.log(john.firstname);


var jane = new Person('Jane', 'Doe');
console.log(jane.firstname);


Person.prototype.greet = function(){
    console.log("hello "+ this.firstname +' '+ this.lastname );
};

john.greet();
jane.greet();

// to check the prototype
console.log(john.__proto__);

// Objects and objects literals

var person = {
    firstname: "Aditya",
    lastname: "Tyagi",
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

person.greet();
console.log(person.address);
console.log('-------------');
console.log(person['address'].street + ' ' + person['address'].city +' '+ person['address'].pincode);

console.log(person['age']);
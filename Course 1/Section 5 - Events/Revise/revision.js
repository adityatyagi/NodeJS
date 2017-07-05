// Object Properties, First class functions and Arrays

var obj = {
    greet : "Hello"
}

console.log(obj.greet);
console.log(obj['greet']);

var prop = 'greet';
console.log(obj[prop]);


// First class functions and arrays

var arr = [];

arr.push(function(){
    console.log('This is the first function');
});

arr.push(function(){
    console.log('this is the second function');
});

// Will run for each "item" in the array "arr"
arr.forEach(function(item){
    item();                 // calling function 
});


// Object.create and Prototypes
// There are a number of ways to create object, and this is one of them

var person ={
    firstname: " ",
    lastname: " ",
    greet: function(){
        return this.firstname + " " + this.lastname;
    }
}

var john = Object.create(person); // john is an empty object who's prototype object = person object

john.firstname ="John"; // I can overwrite all the values of the prototype variables
john.lastname ="Doe";

console.log(john.firstname);
console.log(john.lastname);


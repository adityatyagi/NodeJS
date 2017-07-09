// Inheritance from EventEmitter - without data parameters

var EventEmitter = require('events');
var util = require('util');

// function constructor 
function Greetr(){
    this.greeting = "Hello World!";
}



/* We are inheriting the properties and methods of 
EventEmitter.prototype to Greetr.prototype */

util.inherits(Greetr,EventEmitter); 




// adding method greet() to the prototype of Greetr
Greetr.prototype.greet = function(){
    console.log(this.greeting);
    this.emit('greet');         // tells the specified listener that something happend
}



// object of function constructor 
var greeter1 = new Greetr();


// adding listener to the array
greeter1.on('greet', function(){
    console.log('Someone greeted');
});

greeter1.greet();

// -------------------------------------------------------------------------------

// Inheritance from EventEmitter - with data as parameter passed

Greetr.prototype.greetData = function(data){
    console.log(this.greeting+' '+data);
    this.emit('greet',data);
}

var greeter2 = new Greetr(); 

greeter2.on('greet', function(data){
    console.log('Someone Greeted: '+data);
});

greeter2.greetData('Aditya');



/* 

util.inherits(Destination,Source) only inherits the methods and properties on the Source.prototype
to Destination.prototype. The objects made by function constructor Destination() still doesnt have all the methods
and properties by default.

this can be solved by:

EventEmitter.call(this);


for example -> see inherit2.js


*/


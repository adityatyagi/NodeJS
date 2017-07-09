// Implementing various module patterns
// this is the main file where all the others will be imported
// used for organising the code

var greet1 = require('./greet1'); // this require will return module.exports which is a function
greet1();
//console.log(greet1);



var greet2 = require('./greet2'); // this require will return the object module.exports with the property greet
greet2.greet();




// This require caches the result - working on the same object -> Very Powerfull 
// Here we can also change the variable values of the function -> less secure

var greet3 = require('./greet3'); // this will returns the object.module which is the object of function constructor
//greet3.greet();
greet3.greeting = "This will be shown in 3.1"; //changing the value of greeting 

var greet3_1 = require('./greet3'); // this will work on the same object as the greet3
greet3_1.greet();



// If we want to work with different objects, then require returns the Function Constructor
var greet4 = require('./greet4');
var grtr = new greet4();
grtr.greet();




/* REVEALING MODULE PATTERN (RMP)
Here we expose only those details that we want. We use object literals to pass the specific elements
Though, the JS can access all the variables indirectly, but the user cannot change them */

var greet5 = require('./greet5');
greet5.greet();


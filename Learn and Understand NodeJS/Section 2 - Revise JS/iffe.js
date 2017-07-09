// IIFE - Immediately Invoked Function Expression

// 1. Function Statement

function hello(){
    console.log('Hi');
}
hello(); // calling the function explictly 


// 2. Function Expression (IIFE)

(function (name){                     // anonymous function (function created on a fly)
    console.log('My name is '+ name);
}('Aditya'));

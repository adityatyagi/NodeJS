// This file shows pass by value and pass by reference

// 1. Pass By Value
// The primitives are passed by values. The copy of the primitve is created

var a=10;
function add(b){
    var c = b+b;
    console.log(c);
}
add(a);

console.log(a); // the value doesnt change

// 2. pass by reference 
// Objects are passed by reference, the passed object is shaerd and any changes made are made to 
// this copy only

var c ={
    prop3 : "This is property 3"
}; // empty object

function changeObj(obj){
    obj.prop1 = function(){}; //empty function
    obj.prop2 = {};
}

//before passing through the function
console.log(c);

//after passing through the function
changeObj(c);
console.log(c);



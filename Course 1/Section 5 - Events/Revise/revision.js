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

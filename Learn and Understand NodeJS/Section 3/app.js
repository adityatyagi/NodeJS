// funtion statement
function greet() {
    console.log('hi');
}
greet();

function logGreet(fn) {
    fn();
}
logGreet(greet);

// function expression

var greetMe = function(){
    console.log('this is a function expression');
}

// greet me is still a first-class function

logGreet(greetMe);

logGreet(function(){
    console.log('Hello Aditya');
})   
function Greeter(){
    this.greetings = "This is method 4";
    this.greet = function(){
        console.log(this.greetings);
    }
};

// We will give the main file (greet.js) the ability to make as many objects it can
// module.exports will be carrying the function constructor

module.exports = Greeter;
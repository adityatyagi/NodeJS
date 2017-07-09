// Using function constructors

function Greetr(){
    this.greeting = "This is method 3";
    this.greet = function(){
        console.log(this.greeting);
    }
};

//making module.exports as the object of the function constructor Greetr()
module.exports = new Greetr();

// the variable greeting is exposed here, which can be changed
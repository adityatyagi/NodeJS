// .call() and .apply() are the two ways we can invoke functions

var obj = {
    name: "John Doe",
    greet: function(){
        console.log(`Hello ${this.name}`);
    }
}

obj.greet();

// .call() -> this parameter passed to .call() will be pointed by "this" variable of the function greet()
var obj2 ={
    name: "Aditya Tyagi"
}

obj.greet.call(obj2);


// .apply() -> it works the same way as .call(), the only difference is how it passes the arguments in array and .call() passes in list format
obj.greet.apply(obj2);


/* 

util.inherits(Destination,Source) only inherits the methods and properties on the Source.prototype
to Destination.prototype. The objects made by function constructor Destination() still doesnt have all the methods
and properties by default.

this can be solved by:

EventEmitter.call(this);

*/
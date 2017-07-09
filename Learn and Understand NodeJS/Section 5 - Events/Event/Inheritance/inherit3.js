// this code will use ES6 format -> its nothing but Syntactic Sugar
'use strict'
var EventEmitter = require('events');

class Greetr extends EventEmitter {     // util.inherits(Greetr, EventEmitter)

    // function constructor
    constructor(){
        super();    // Event.call(this)
        this.greetings = "Hello World!";
        
    }


    //prototype
    greet(data){
        console.log(`${this.greetings}: ${data}`);
        this.emit('greet',data);
    }


}

var greeter1  = new Greetr();

greeter1.on('greet',function(data){
            console.log(`Someone greeted: ${data}`);
});

greeter1.greet('Tony');


/*
for making it in modules

--------greet.js------------

var EventEmitter = require('events');
module.exports = class Greetr extends EventEmitter {
    super();
    this.greetings = "Hello World";
}



-----------app.js------------

var Greetr = require('./greet.js');


*/
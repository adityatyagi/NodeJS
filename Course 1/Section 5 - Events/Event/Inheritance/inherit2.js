/* 

util.inherits(Destination,Source) only inherits the methods and properties on the Source.prototype
to Destination.prototype. The objects made by function constructor Destination() still doesnt have all the methods
and properties by default.

this can be solved by:

EventEmitter.call(this);

*/

var EventEmitter = require('events');
var util = require('util');

function Greetr(){
    EventEmitter.call(this);
    this.greetings = "Hello World!";
}

util.inherits(Greetr,EventEmitter);

Greetr.prototype.greet = function(){
    console.log(this.greetings);
    this.emit('greet');
}

greeter1 = new Greetr(); // every object will by default will have all the properties and methods of EventEmitter on it.

greeter1.on('greet',function(){
    console.log('Someone Greeted');
});

greeter1.greet();
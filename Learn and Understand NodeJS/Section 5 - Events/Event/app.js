// We build our own version of Node Event Emitter which will show the working of the real one

var Emitter = require('./emitter.js');

// this will help us remove the dependency on Magic Strings
var configEvents = require('./config.js').events;

var emtr = new Emitter();

emtr.on(configEvents.GREET, function(){
    console.log('This is the first listener');
});

emtr.on(configEvents.GREET, function(){
    console.log('this is the second listener');
});

console.log('Hello');
emtr.emit(configEvents.GREET);
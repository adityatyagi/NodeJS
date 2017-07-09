// We build our own version of Node Event Emitter which will show the working of the real one
// Making a module

// function constructor
function Emitter(){
    this.events = {}    // empty object, this object will contain the property of array form with functions(listeners) as its elements
}

Emitter.prototype.on = function(type, listener){

    //checks if the object already has the prop of [type] and is of array and if not, then makes one
    this.events[type] = this.events[type] || [] ;
    this.events[type].push(listener);
}

Emitter.prototype.emit = function(type){
    if(this.events[type]){
        this.events[type].forEach(function(listener){
            listener();
        });
    }
}

module.exports = Emitter;
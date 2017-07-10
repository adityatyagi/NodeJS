function greet(callback) {
    console.log('Hello');
    data = {
        name: "Aditya Tyagi"
    }
    callback(data);
}

greet(function(data) {
    console.log('This is a callback function');
    console.log(data);
    console.log('----------end of first callback function------------')
});

greet(function() {
    console.log('This is another callback function');
    console.log(data.name);
});
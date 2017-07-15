// javascript code for the client, that the browser will download and run
// this file is not processed by node because it is inside the static directory
// node is going to simply deliver the contents of the file to the browser when a http request comes
// this file is processed by the V8 engine in the browser

angular.module('TestApp', []); // [] contains the other modules that the angular app is dependent on

angular.module('TestApp').controller('MainController', ctrlFunc);

function ctrlFunc() {
    this.message = "Hello"; // this. points to vm in index.ejs
    this.people = [{
            name: 'Jonn Doe'
        },
        {
            name: 'Jane Doe'
        },
        {
            name: 'Aditya'
        }
    ]
}
var moment = require('moment') // first it looks into node core, and then into node_modules
console.log(moment().format("ddd, hA"));
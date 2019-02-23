'use strict';

const moment = require('moment');

let date = new Date();
let jam = moment().format('MMMM Do YYYY, h:mm:ss a');

console.log(date);
console.log(jam);
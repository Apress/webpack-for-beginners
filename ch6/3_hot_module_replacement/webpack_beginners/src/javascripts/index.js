// CommonJS syntax :
// var sayHello = require('./greeting.js');

// import application from "../stylesheets/application.scss"
import application from "CssFolder/application.scss"
// ES6 syntax :
import { sayHello } from './greeting.js';
import $ from 'jquery';

sayHello();

$('body').append('<div style="background:orange;padding:10px;">HellojQuery!</div>');


if (module.hot) {
  module.hot.accept(function (err) {
    console.log(err);
  });
}

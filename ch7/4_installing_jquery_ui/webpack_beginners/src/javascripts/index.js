// CommonJS syntax :
// var sayHello = require('./greeting.js');

// import application from "../stylesheets/application.scss"
import application from "CssFolder/application.scss"
import $ from 'jquery';
import { sayHello } from './greeting.js';
import 'bootstrap';
import 'jquery-ui';
import 'jquery-ui/ui/widgets/datepicker';

$( "#datepicker" ).datepicker();

$('[data-toggle="tooltip"]').tooltip();

sayHello();

$('body').append('<div style="background:orange;padding:10px;">HellojQuery!</div>');


if (module.hot) {
  module.hot.accept(function (err) {
    console.log(err);
  });
}

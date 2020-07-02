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

import Quill from 'quill';
var quill = new Quill('#editor', {
  theme: 'snow'
})

import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
ClassicEditor
  .create( document.querySelector( '#ckeditor' ) )
  .then( editor => {
     console.log( editor );
  } )
  .catch( error => {
    console.error( error );
  } );

$('[data-toggle="tooltip"]').tooltip();

sayHello();

$('body').append('<div style="background:orange;padding:10px;">HellojQuery!</div>');


if (module.hot) {
  module.hot.accept(function (err) {
    console.log(err);
  });
}

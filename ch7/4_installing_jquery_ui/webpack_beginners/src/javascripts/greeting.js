// import jquery
import $ from 'jquery'

function sayHello(){
  let tool = 'webpack';
  alert(`Hello I am ${tool}, welcome to ES6`);
  console.log('Can you find me?');
  $('body').append('<div style="background:#EEE;">does jQuery exist here?</div>');
}

// CommonJS syntax :
// module.exports = sayHello;

// ES6 syntax :
export { sayHello };

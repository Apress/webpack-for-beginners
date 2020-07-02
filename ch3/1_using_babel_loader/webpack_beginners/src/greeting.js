function sayHello(){
  // alert('Hello I am Webpack');
  // alert('Hello I am Webpack, am watching you');
  let tool = 'webpack';
  alert(`Hello I am ${tool}, welcome to ES6`);
}

// CommonJS syntax :
// module.exports = sayHello;

// ES6 syntax :
export { sayHello };

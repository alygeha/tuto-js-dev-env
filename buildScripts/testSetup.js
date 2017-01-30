//this file isn't transpiled so must use CommonJS and ES5 : it will be used by mocha

//REgister babel to transpile before our test run 
require('babel-register')();

//disable webpack features that Mocah doesn't understand
require.extensions['.css'] = function(){};
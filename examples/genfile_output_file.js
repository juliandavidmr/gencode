var gencode = require('../index');

var input = {
  name: 'index.html',
  content: [{
    line: '<title>Example</title>',
    space: 0,
    tabs: 1
  }, {
    line: '*<div class="header">',
  }, {
    line: '<div class="container">',
    space: 5,
    tabs: 1
  }, {
    line: '<div class="logo">',
    space: 5,
    tabs: 1
  }, {
    line: '<a href="/">Title</a>',
    space: 5,
    tabs: 1
  }, {
    line: '</div>',
    space: 5,
    tabs: 1
  }, {
    line: '<div class="header-right">',
    space: 5,
    tabs: 1
  }, {
    line: '<a href="/empresa"><span>Hello</span></a>',
    space: 5,
    tabs: 1
  }, {
    line: '</div>',
    space: 2,
    tabs: 1,
    repeat: 2
  }, {
    tabs: 2
  }]
};

var array = ['1', '2', '3', '4'];

gencode.generator(input, false).then((value) => {
  gencode.showArray(value);
});

gencode.generatorfull(input, "/home/julian/Escritorio/test/", "index.html").then((value) => {
  console.log("output: ", value);
}, function (err) {
  console.log("Error: ", err);
})

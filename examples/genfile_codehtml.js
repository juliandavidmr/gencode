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

gencode.generator(input, false).then((value) => {
  gencode.showArray(value);
});

var array = ['1', '2', '3', '4'];

/**
 * Generar salida teniendo en cuenta solo espacios
 * @param  {[type]} array [description]
 * @param  {[type]} 'El   titulo'       [description]
 * @param  {[type]} 7     [description]
 * @return {[type]}       [description]
 */
gencode.generateBySpace(array, 'El titulo', 7).then((value) => {
  console.log("output: ", JSON.stringify(value));

  gencode.generator(value, true).then((result) => {
    gencode.showArray(result);
  }, function (error) {
    console.error(error);
  });
}, function (err) {
  console.log("Error: ", err);
})


gencode.generateByTabs(array, 'El titulo', 3).then((value) => {
  console.log("output: ", JSON.stringify(value));

  gencode.generator(value, true).then((result) => {
    gencode.showArray(result);
  }, function (error) {
      console.error(error);
  });
}, function (err) {
  console.log("Error: ", err);
})

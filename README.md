
Documents
-------------

#### Generator source code and files, with: text format, minification, indenting, and beautify. ####

This library also provides all the functions necessary to convert between different data types and store in files.

* [Installation](#installation)
* [Import](#import)
* [Usage](#usage)

------

## Installation ##

```bash
$> npm install gencode --save
```

## Usage ##

## Import ##
```js
var gencode = require('gencode');
//or
import gencode from 'gencode';
```

## Array to file ##
Storing an __array in a file__ of any extension.
```js
var array = ['1', '2', '555543', '23423', 'Lorem ipsum', 'Lorem ipsum 2', 'Lorem ipsum 3', 231];

gencode.toFile(array, '/home/julian/Desktop/test', 'array.txt', '\n').then((value) => {
	console.log("Result: ", value);
	/* Result: successfull */
}, function(err) {
	console.log("Error: ", err);
});

/*
Content of file /home/julian/Escritorio/test/array.txt =>
1
2
555543
23423
Lorem ipsum
Lorem ipsum 2
Lorem ipsum 3
231
*/
```
----
# Complex input
- **name**: file name, extension: html, txt, jade, jsx, css, xml, md, and many more.
- **content**:
    - **line**: a line with any content (string, number, boolean) **[Required]**
    - **space**: Initial spacing before the line (number) **[Optional]** *Default 0 spaces*
    - **tabs**: Initial tabulations space. **[Optional]** *Default 0 spaces, no tabs*


> **Note:**
> -  The main priority is the spaces, ie, if there are spaces and tabs then the_ spaces are taken.


```js
var input = {
	name: 'index.html',
	content: [{
		line: '<title>Example</title>',
		space: 0,
		tabs: 0
	}, {
		line: '<div class="header">',
	}, {
		line: '<div class="container">',
		space: 4,
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
```
#### <i class="icon-file"></i> Also

```js
var input = {
	name: 'index.html',
	content: [{
		line: '<title>Example</title>',
		space: 0,
		tabs: 0
	}, {
		line: '<div class="header">',
	}, {
		line: '<div class="container">',
		tabs: 1
	}, {
		line: '<div class="logo">',
		space: 5
	}, {
		line: '<a href="/">Title</a>',
		space: 5
	}, {
		line: '</div>',
		space: 5
	}, {
		line: '<div class="header-right">',
		tabs: 1
	}, {
		line: '<a href="/empresa"><span>Hello</span></a>',
		space: 5
	}, {
		line: '</div>',
		space: 2,
		repeat: 2 //Repeats </div> two times
	}]
};
```

```js
gencode.generatorfull(input, "/home/julian/Desktop/test/", "index.html").then((value) => {
	console.log("output: ", value);
}, function(err) {
	console.log("Error: ", err);
})
```

## Output without file:
```js
var input = {
	name: 'index.html',
	content: [{
		line: '<title>Example</title>',
		space: 0,
		tabs: 0
	}, {
		line: '<div class="header">',
	}, {
		line: '<div class="container">',
		space: 4,
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
		tabs: 2 //this is an error in strict mode.
	}]
};


/**
 * [generator description]
 * @param  {[json]} input [json input]
 * @param  {[boolean]} false [strict mode, ends the generation if an error is found.]
 * @return {[string]}       [output]
 */
gencode.generator(input, false).then((value) => {
	console.log("output: ", value);
}, function(err) {
	console.log("Error: ", err);
});
```

# Utils

### Read file and process content ##

> *Content file ():*
a
aaronita
aarónico
aba
ababa
ababillarse
ababol
abacal

```js
gencode.utils.toArray('/home/julian/Desktop/test/entrada.txt', 'utf8', '\n').then((value) => { //Too: \n, \t, -, etc.
  console.log("Result:", JSON.stringify(value));
}, (error) => {
  console.log("ERROR=>", error);
});

/*
Result: ["a","aaronita","aarónico","aba","ababa","ababillarse","ababol","abacal"]
*/
```

### Generating separation ##

```js
console.log(gencode.utils.separator(3, "\n") + "|Ends here the result");
//Result:
/*



|Ends here the result
 */
```

```js
console.log(gencode.utils.separator(3, "\t") + "|Ends here the result");
//Result:
//			|Ends here the result
```

```js
console.log(gencode.utils.separator(4, "_") + "|Ends here the result");
//Result:
//____|Ends here the result
```

```js
var array = ['any', 'number', 'or', 'string', 100, 200];
gencode.utils.showArray(array);
//Result:
//any
//number
//or
//string
//100
//200
```
```js
var array = ['any', 'number', 'or', 'string', 100, 200];
console.log(gencode.utils.arrayToString(array, '\t')); //\t, \n, _, etc.
//any	number	or	string	100	200
```


----------

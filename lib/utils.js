var isArray = require('isarray');
var fs = require('fs');

exports.separator = function(count, separate) {
	var r = "";
	for (var i = 0; i < count; i++) {
		r = r.concat(separate);
	}
	return r;
}

//Generator space
exports.space = function(count) {
	return this.separator(count, " ");
}

//Generator tabs
exports.tabs = function(count) {
	return this.separator(count, "\t")
}

//See array
exports.showArray = function(array) {
	array.map((item) => {
		console.log(item);
	})
}

//Add name file to directory
exports.concatFile = function(dir, name) {
	if (dir.endsWith("/")) {
		return dir.concat(name);
	} else {
		return dir.concat("/" + name);
	}
}

/**
 * [function procesar item]
 * @param  {[json]} item          [description]
 * @param  {[number]} i             [description]
 * @param  {[number]} tabs_default  [default tabs]
 * @param  {[number]} space_default [default space]
 * @return {[string]}               [string with space or tabs]
 */
exports.spatabs = function(item, i) {
	if ((item.space)) {
		return (this.space(item.space) + (item.line));
	} else if ((item.tabs)) {
		return (this.tabs(item.tabs) + (item.line));
	} else {
		return (this.space(0) + (item.line));
	}
}

/**
 * [function convert array to string]
 * @param  {[type]} array_string [description]
 * @return {[type]}              [description]
 */
exports.arrayToString = function(array_string, separator) {
	var string = "";
	array_string.map((item, i) => {
		string = string.concat(item + separator)
	})
	return string;
}

exports.generateBySpace = function(array, name, default_space) {
	return new Promise(function(resolve, reject) {
		default_space = parseInt(default_space);
		if (default_space == undefined) {
			reject("default_space is not number")
		}
		if (isArray(array)) {
			var input = {
				name: name,
				space: default_space,
				content: []
			}
			array.map((item) => {
				input.content.push({
					line: item,
					space: default_space
				});
			});
			resolve(input);
		} else {
			reject("The parameter is not an array.")
		}
	});
};

exports.generateByTabs = function(array, name, default_tabs) {
	return new Promise(function(resolve, reject) {
		if (!name) {
			reject("'Name' required.")
		}

		default_tabs = parseInt(default_tabs);
		if (default_tabs == undefined) {
			reject("default_tabs is not number")
		}

		if (isArray(array)) {
			var input = {
				name: name,
				content: []
			}
			array.map((item) => {
				input.content.push({
					line: item,
					tabs: default_tabs,
				});
			});
			resolve(input);
		} else {
			reject("The parameter is not an array.")
		}
	});
};

/**
 * [function dir of .txt, .md...]
 * @param  {[type]} dir       [address file]
 * @param  {[type]} format    [utf8, ]
 * @param  {[type]} separator [\n, \t, etc...]
 * @return {[type]}           [array file containing every line with separation]
 */
exports.toArray = function(dir, format, separator) {
	return new Promise(function(resolve, reject) {
		exports.readText(dir, format).then((value) => {
      if (separator) {
        value = value.split(separator);
      } else {
        value = value.split("\n");
      }
      resolve(value);
		}, (err) => {
      reject(err);
		});
	});
}

exports.readText = function(dir, format) {
	return new Promise((resolve, reject) => {
		fs.readFile(dir, format, function(err, data) {
			if (err) {
				reject(err);
			} else {
				resolve(data);
			}
		});
	});
}

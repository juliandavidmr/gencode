var isArray = require('isarray');

exports.space = function(count) {
	var r = "";
	for (var i = 0; i < count; i++) {
		r = r.concat(" ");
	}
	return r;
}

exports.tabs = function(count) {
	var r = "";
	for (var i = 0; i < count; i++) {
		r = r.concat("\t");
	}
	return r;
}

exports.showArray = function(array) {
	array.map((item) => {
		console.log(item);
	})
}

exports.concatFile = function(dir, name) {
	if (dir.endsWith("/")) {
		return dir.concat(name);
	} else {
		return dir.concat("/" + name);
	}
}

exports.spatabs = function(item, i, tabs_default, space_default) {
	if ((item.space)) {
		return (this.space(item.space) + (item.line));
	} else if ((item.tabs)) {
		return (this.tabs(item.tabs) + (item.line));
	} else {
		return (this.space(0) + (item.line));
	}
}

exports.arrayToString = function(array_string) {
	var string = "";
	array_string.map((item, i) => {
		string = string.concat(item + "\n")
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

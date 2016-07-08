var utils = require('./utils');

var tabs;
var space;

exports.showArray = function (array) {
  utils.showArray(array);
};

exports.generator = function(input, strict) {
	return new Promise((resolve, reject) => {
		var output = [];
		tabs = input.tabs;
		space = input.space | undefined;

		if (input.name) {
			input.content.map((item, i) => {
				if (item.line) {
					if (item.repeat || item.repeat > 0) {
						var aux = (spatabs(item, i));
						for (var i = 0; i < item.repeat; i++) {
							output.push(aux)
						}
					} else {
						output.push(spatabs(item, i));
					}
				} else {
          if (strict) {
            if (strict == true) {
              reject("Error: tag 'name' required.")
            }
          }
				}
			});
      resolve(output);
		} else {
			console.log("Error: tag 'name' required.");
      reject("Error: tag 'name' required.")
		}
	})
};

function spatabs(item, i) {
	if (item.space || item.space == 0) {
		return (utils.space(item.space) + (item.line));
	} else if (item.tabs || item.tabs == 0) {
		return (utils.tabs(item.tabs) + (item.line));
	} else if (space || space == 0) {
		return (utils.space(space) + (item.line));
	} else if (tabs || tabs == 0) {
		return (utils.tabs(tabs) + (item.line));
	} else {
    return (utils.space(1) + (item.line));
	}
}

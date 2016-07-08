var gencode = require('../index');

console.log(gencode.utils.separator(5, "\n") + "|Ends here the result");
//Result:
/*





|Ends here the result
 */

console.log(gencode.utils.separator(3, "\t") + "|Ends here the result");
//Result:
//			|Ends here the result


console.log(gencode.utils.separator(4, "_") + "|Ends here the result");
//Result:
//____|Ends here the result

var array = ['any', 'number', 'or', 'string', 100, 200];
gencode.utils.showArray(array);
//Result:
//any
//number
//or
//string
//100
//200


var array = ['any', 'number', 'or', 'string', 100, 200];
console.log(gencode.utils.arrayToString(array, '\t'));
//Result:
//any	number	or	string	100	200

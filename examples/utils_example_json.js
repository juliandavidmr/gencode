var gencode = require('../index');

gencode.utils.toArray('/home/julian/Escritorio/test/entrada.txt', 'utf8', '\n').then((value) => {
  console.log("Result:", JSON.stringify(value));
}, (error) => {
  console.log("ERROR=>", error);
});

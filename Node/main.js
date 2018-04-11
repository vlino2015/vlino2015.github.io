var request = require('request');
var url = 'https://nodejs.org/en/';

request.get(url, function (error, response, html) {
  if (error) {
    console.error(error.message);
    return;
  }
  console.log(html);
});

// var readline = require('readline');
// var rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
// rl.question("How's it going? ", function(answer) {
//   console.log("Awesomesauce:", answer);
//   rl.close();
// });

// fs.readFile(filename, function (error, buffer) {
//     if (error) {
//       console.error(error.message);
//       return;
//     }
//     console.log('File Data: ', buffer.toString());
//   });

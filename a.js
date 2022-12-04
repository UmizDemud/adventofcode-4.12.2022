var readline = require('readline');
var fs = require('fs');

var myInterface = readline.createInterface({
  input: fs.createReadStream('input.txt')
});

let count = 0;

let arr = [];

myInterface.on('line', function (line) {
  arr = [];
  line
    .split(',')
    .forEach(el => { el
      .split('-')
      .forEach(el => arr.push(Number.parseInt(el)));
    })
  if (arr[0] <= arr[3] && arr[2] <= arr[1]) {
    count++;
  }
}).on('close', () => {
  console.log(count);
});

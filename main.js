// const http = require('http');

// const connectserver = http.createServer((req, res) => {
//   res.writeHead(200, 'utf-8');

//   res.end('Hello world');
// });

// connectserver.listen(5000);

// console.log('Server running at http://127.0.0.1:5000/');

// Synchronous reading
// const fs = require('fs');

// const data = fs.readFileSync('input.txt');
// console.log(data.toString());
// console.log("First")

// Asynchronous
const fs = require('fs');

fs.readFile('input.txt', (err, data) => {
  console.log(data.toString());
});
console.log('First');

////////////////////
console.log('Going to write into existing file');
fs.writeFile('input.txt', 'Simply Easy Learning!', function (err) {
  if (err) {
    return console.log(err);
  }
});

fs.readFile('input.txt', (err, data) => {
  if (err) return console.log(err);
  console.log('Asynchronous read: ' + data.toString());
});

console.log('Data written successfully');
console.log("let's read newly written data");

fs.writeFile('classone.txt', 'we learnt about file system', (err) => {
  if (err) {
    console.log(err);
  }
});

fs.readFile('classone.txt', (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});

// fs is the file system
const fs = require('fs');
const http = require('http');

const obj = {
  "newTab": "control + t"
}

//fs.writeFile('./data.json',JSON.stringify(obj),(err)=> {})
fs.appendFileSync('./data.json',JSON.stringify(obj),(err)=> {})

//console.log(process.argv.length)

// return all things starting from pos 2 till the end of array
//const arr = process.argv.splice(2);
//console.log("this is arr: ",arr)

function logThis(a,b) {
  // "arguments" is a function only thing
  console.log(a,b,arguments.length);
}
// logThis('a','b')
//logThis(fs);

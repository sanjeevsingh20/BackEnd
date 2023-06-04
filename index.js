console.log("Hello world! ")

const mysql = require('mysql')
const os = require('os')
const det=require("./second") // We have to import the data from the second file which was details of the student  so we first export the file from the second file itself

console.log(os.freemem())
console.log(os.homedir())
console.log(os.platform())
console.log(os.hostname())
console.log(det)


var url=require('url')

var adr ='https://www.youtube.com/watch?v=45n4vHs1hww'
var q = url.parse(adr,true)
console.log(q.hostname)
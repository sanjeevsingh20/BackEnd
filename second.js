// details={
//     name:"sanjeev",
//     attempts_left:7,
//     Address:"Delhi"
// }

// module.exports=details

//It will create a web server of hostname is local host and with server poprt is 8080
var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('example.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);

// var fs = require('fs');

// fs.unlink('mynewfile1.html', function (err) {
//   if (err) throw err;
//   console.log('Deleted sucessfully!');
// });
  
// fs.rename('home.css','renamed.css',function(err){
//   if (err) throw err;
//   console.log("renamed! Successfully")
// })


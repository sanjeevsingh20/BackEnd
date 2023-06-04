// var http = require('http')
// var fs = require('fs')

// http.createServer((req, res) => {
//     req.statusCode = 200;
//     res.writeHead(200, { 'Content-Type': 'text/html' });

//     if (req.url == '/') {
//         fs.readFileSync('example.html', (err, data) => {
//             if (err) {
//                 console.log(err)
//             }
//             else {
//                 res.write(data)
//                 res.end()
//             }
//         });
//     }
//     if (req.url == '/about') {
//                 res.end('<h1>This Is About Page</h1> <p> This page tells about the information</p1>')
//             }
//         }).listen(8000);

var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    my_data= fetch('http://codewithharry.com/videos')
   
    if(req.url == '/'){
        
        fs.readFile('home.html', function(err, data) {
            if(err){
                console.log(err)
            }
            else{
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                return res.end();
            }
            
          });
    }
    if(req.url == '/about'){
        res.write("Hello world")
        return res.end()
    }
}).listen(8080);
/**
 * 第七行感觉有点类似初始化一个对象
 * 然后用这个对象去调用方法
 */ 

'use strict';



var http = require('http');

var server = http.createServer(function(request,response){

        console.log(request.method + ':' + request.url);

        response.writeHead(200,{'Content-Type':'text/html'});

        response.end('<h1>Hello Word</h1>');


});
server.listen(8080);
console.log('Server is running at http://127.0.0.1:8080/'); 

// var greet = require('./hello');
// var fs = require('fs');
// fs.readFile('sample.txt','utf-8',function(err,data){

//         if(err){
//             console.log(err);
//         }else{
//             console.log(data);   
//         }

// });
// // var getSum = require('./hello'); 
// var s = 'mike';
// greet.greet(s); 
// greet.getSum(2,43);



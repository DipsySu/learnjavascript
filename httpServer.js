
//导入 http 模块
var http = require('http');

//创建一个 server 

var server = http.createServer(function(request,response){

        //输出请求方式, 以及请求的 url
        console.log(request.method + ':' + request.url);

        //设置响应内容
        response.writeHead(200,{'Content-Type':'text/html'});

        response.end('<h1>Hello Word</h1>');

});

//开启监听 8080 端口
server.listen(8080);

console.log('Server is running at http://127.0.0.1:8080/'); 

 'uer strict'
//import pathmanger
 var pathManger =  require('path');
 var fs = require('fs');
 var  url = require('url');
 var http = require('http');

//获取当前目录
var path = pathManger.resolve(process.argv[2] || '.');

//console.log(path);

//var filepath = pathManger.join(path,'pub','index.html');
var server = http.createServer(function(request,response){
    //获取 url 路径
    var pathname = url.parse(request.url).pathname;
    //获取对应本地文件路径,
    var filepath = pathManger.join(path,pathname);

    fs.stat(filepath,function(err,stats){
        if (!err && stats.isFile()) {   
            console.log('200'+request.url);
            response.writeHead(200);
            fs.createReadStream(filepath).pipe(response);
        } else {
             // 出错了或者文件不存在:
            console.log('404 ' + request.url);
            // 发送404响应:
            response.writeHead(404);
            response.end('404 Not Found');
        }
    });

});

server.listen(8080);

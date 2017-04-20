'use strict';
//测试 文件fs 
var fs = require('fs');
//读取文件,读取 sample.txt 的内容 , 异步读取
fs.readFile('sample.txt','utf-8',function(err,data){

        if(err){
            console.log(err);
        }else{
            console.log(data);   
        }
});

//同步读取
var data = fs.readFileSync('sample.txt','utf-8');
console.log('同步读取'+data);


// 写入文件
var textContent = '你好,我是 \n 小小酥';
fs.writeFile('output.txt',textContent,function(err){
        if (err) {
               console.log('写入文件出错:'+err); 
        } else {
                console.log('写入文件成功');
        }
});


/**
 * 引用模块
 * 感觉有点类似初始化一个对象
 * 然后用这个对象去调用方法
 */ 
var greet = require('./hello');
var s = 'mike';
greet.greet(s); 
greet.getSum(2,43);



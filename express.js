const express = require("express");
const app = express();
//req 请求  res 响应 => 返回

app.get('/server1', (req, res) => {
//设置响应头 . Access-Control-Allow-Origin允许跨域
    res.setHeader("Access-Control-Allow-Origin","*");
    //发送响应体
    res.send(["hello world1"]);
});

//发送json
app.all('/json-server', (req, res) => {
//设置响应头 . Access-Control-Allow-Origin允许跨域
    res.setHeader("Access-Control-Allow-Origin","*");
    // res.setHeader("Access-Control-Allow-Headers","*")

    //发送响应
    const data={
        name:{name:"testy11"}
    }
    //send  只能发送字符串以及buffer类型 数据

    res.send(JSON.stringify(data));

});
//ie 缓存
app.get('/ie', (req, res) => {
//设置响应头 . Access-Control-Allow-Origin允许跨域
    res.setHeader("Access-Control-Allow-Origin","*");


    // //发送响应
    // const data={
    //     name:{name:"testw11"}
    // }
    //send  只能发送字符串以及buffer类型 数据

    res.send("hello ie5");

});
//网络请求超时提醒
app.get('/time', (req, res) => {
//设置响应头 . Access-Control-Allow-Origin允许跨域
    res.setHeader("Access-Control-Allow-Origin","*");
    // res.setHeader("Access-Control-Allow-Headers","*")

    // //发送响应
    // const data={
    //     name:{name:"testw11"}
    // }
    //send  只能发送字符串以及buffer类型 数据
    // setTimeout  延时函数
    setTimeout(()=>{
        res.send("延时响应");
    },3000)

});
//手动发送 及取消请求
app.get('/requires', (req, res) => {
//设置响应头 . Access-Control-Allow-Origin允许跨域
    res.setHeader("Access-Control-Allow-Origin","*");
    setTimeout(()=>{
    res.send("响应1s");
    },1000)


});
//post  请求 响应
app.all('/server', (req, res) => {
//设置响应头 . Access-Control-Allow-Origin允许跨域
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers","*")
    //req.on 响应结果
    req.on('data', function(chunk){
        console.log(chunk.toString('utf8'));
    });
    //发送响应


    res.send("hello world");

});
//jquery  服务端
app.all('/jquery', (req, res) => {
//设置响应头 . Access-Control-Allow-Origin允许跨域
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers","*");
    let data = JSON.stringify({"name": "hello jquery"})
    res.send(data);

});

//发送执行函数
app.all('/kayak', (req, res) => {
//设置响应头 . Access-Control-Allow-Origin允许跨域
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers","*");
    const result = {
        name: 'du',
        height:180
    };

    let str=JSON.stringify(result);
    // console.log(data)
    // res.end( 'test('+str+')');
    res.end(`test(${str})`);
});

//发送执行passwords函数
app.all('/passwords', (req, res) => {
//设置响应头 . Access-Control-Allow-Origin允许跨域
    res.setHeader("Access-Control-Allow-Origin","*");
    // res.setHeader("Access-Control-Allow-Headers","*");
    const result = {
        exist: 1,
        password:123456
    };
    let len=new Array();
    for(let key in result) {

        if (key=='password'){
            len[len.length]=result[key];
        }

    };
    function isInArray(arr,value){
        for(var i = 0; i < arr.length; i++){
            if(value === arr[i]){
                return true;
            }
        }
        return false;
    }
    //req.on 响应结果
    req.on('data', function(chunk){
        let pair = Number(chunk);
        if(isInArray(len,pair)){
            res.end('登录成功');
        }
        else{
            res.end('alr');
        }

    });

});
app.listen(8000,()=>{
    console.log("服务已启动") })
//安装 nodemon 实时刷新服务器  npm install -g nodemon
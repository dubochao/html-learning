var express = require('express');
var app = express();
var bodyParser = require('body-parser');
 
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })
 
app.use('/public', express.static('public'));
 
app.get('/', function (req, res) {
	// res.render(__dirname + "/" + "index.html" )
   res.sendFile( __dirname + "/" + "express.html" );
})
 
app.post('/process_post', urlencodedParser, function (req, res) {
 
   // 输出 JSON 格式
   var response = {
       "first_name":req.body.username,
       "last_name":req.body.password,
       "checkbox":req.body.jizhu,
   };
   console.log(response);
   res.end('success');
})
 
var server = app.listen(8081, function () {
 
//   var host = server.address().address
  var port = server.address().port
 
//   console.log("访问地址为 http://127.0.0.1", host, port)
console.log("访问地址为 http://127.0.0.1:", port)
})
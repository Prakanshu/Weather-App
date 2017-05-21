var express=require('./config/express');
//var mongoose=require('./config/mongoose');
var app=express();
//var db=mongoose();
app.listen(3301);
module.exports=app;
console.log('Server running at http://localhost:3301/');
/**
 * Created by SONY on 22-04-2017.
 */
var express=require('express');
var path=require('path');



module.exports=function()
{

    var app=express();
    app.use(express.static('public'));

    require('../app/routes/index.server.routes')(app);
    return app;
}


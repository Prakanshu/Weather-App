/**
 * Created by SONY on 22-04-2017.
 */

//var obj=path.parse("/public/views/index.html");

//var roots=require('C://Users/SONY/WeatherApp/rootpath');
    var roots=require('../../rootpath');
var root=roots.root();
var path=require('path');

exports.render=function (req,res) {

    res.sendFile(path.join(root,'/public/views/index.html'));

};
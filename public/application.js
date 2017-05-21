/**
 * Created by SONY on 14-05-2017.
 */
var myapp;
myapp=angular.module('myapp',['ngRoute']);

    myapp.factory('getKeyService',function () {

        var apiKey="";
        this.setKey=function(key)
        {
            if(key)
            this.apiKey=key;
        };
        this.getKey=function(){
            return apiKey;
        };
        return{
          getKey:this.getKey
          };


});
myapp.controller('WeatherController',['$scope','$http','getKeyService']);

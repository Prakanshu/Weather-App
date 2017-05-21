/**
 * Created by SONY on 14-05-2017.
 */


angular.module('myapp').controller('WeatherController',['$scope','$http','getKeyService',function ($scope,$http,getKeyService) {

    $scope.today=new Date();
    $scope.getDetails=function () {


        var details={};

        $http.get("http://api.wunderground.com/api/"+getKeyService.getKey()+"/"+"conditions"+"/q/"+$scope.city+'.json')
            .then(function(response){

                details = response.data;

                console.log(details.current_observation)
               $scope.result=details.current_observation;

            });




    }

}]);



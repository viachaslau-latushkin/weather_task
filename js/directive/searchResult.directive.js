angular.module('weatherApp').
    directive('serachResult',function(){
        return {
            restrict:"A",
            templateUrl: "../html/serachResult.html"
        };
    });
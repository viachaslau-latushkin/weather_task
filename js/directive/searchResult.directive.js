angular.module('weatherApp').
    directive('searchResult',function(){
        return {
            restrict:"A",
            templateUrl: "html/searchResult.html"
        };
    });
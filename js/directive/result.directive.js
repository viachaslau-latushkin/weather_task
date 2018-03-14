angular.module('weatherApp').
  directive('mainResult',function(){
    return {
      restrict:"A",
      templateUrl: "html/result.html",
      link: function(scope,element,attr){
        scope.delete = function(city){
          scope.availableCity[city].enable = true;
          scope.selectedCityId = '';
          delete scope.selectedArray[city];
        };
      }
    }
  });
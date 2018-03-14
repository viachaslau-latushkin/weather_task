angular.module('weatherApp').
  controller('searchController', ['$scope', 'searchService', 'dataStorage', function($scope, searchService, dataStorage){
    $scope.search = function(){
      if($scope.keywords.length >= 3){
        searchService.search($scope.keywords).then(function(response){
          if(response.data.list.length > 0){
              $scope.searchResultArray = response.data.list;
          }
        });
      }
    };

    $scope.addToAvailableCity = function(cityId,cityName){
      if(!dataStorage.availableCity[cityId]){
        dataStorage.availableCity[cityId] = {id: cityId, name: cityName};
        dataStorage.saveData();
      }
      else {
        alert('Already exist city: ' + cityName );
      }
    }
  }]);
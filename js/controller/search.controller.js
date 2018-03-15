angular.module('weatherApp').
  controller('searchController', ['$scope', 'searchService', 'dataStorage', '$timeout', function($scope, searchService, dataStorage, $timeout){
    var _timeout;

    $scope.search = function(keywords){
        if(keywords.length <= 3)
            return;
        if(_timeout){
            $timeout.cancel(_timeout);
        }
        _timeout = $timeout(function(){
            searchService.search(keywords).then(function(response){
                if(response.data.list.length > 0){
                    $scope.searchResultArray = response.data.list;
                }
            });
            _timeout = null;
        },800);
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
angular.module('weatherApp')
  .controller('mainController', ['$scope','dataStorage',function($scope, dataStorage){
    $scope.selectedCityId = '';
    $scope.selectedArray = {};
    $scope.availableCity = dataStorage.restoreData();

    $scope.filterCityEnable = function() {
      var result = {};
      angular.forEach($scope.availableCity, function(data, cityId) {
        if (!data.hasOwnProperty('enable') || (data.hasOwnProperty('enable') && data.enable)) {
          result[cityId] = data;
        }
      });
      return result;
    }
  }]);
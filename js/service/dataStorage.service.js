angular.module('weatherApp').
  factory('dataStorage', function() {
    var requestService = {
      availableCity : {
        625144 : {id: 625144, name: 'Minsk'},
        2267057 : {id: 2267057, name: 'Lisbon'},
        611717 : {id: 611717, name: 'Tbilisi'},
        6539761 : {id: 6539761, name: 'Rome'},
      },
      saveData: function () {
        sessionStorage.cityData = angular.toJson(requestService.availableCity);
      },
      restoreData: function () {
        if(sessionStorage.cityData){
          var cityFromStorage = angular.fromJson(sessionStorage.cityData);
          if(Object.keys(cityFromStorage).length > Object.keys(requestService.availableCity).length) {
            requestService.availableCity = cityFromStorage;
          }
          angular.forEach(requestService.availableCity, function(data) {
            if(data.hasOwnProperty('enable')) {
              delete data['enable'];
            }
          });
        }
        return requestService.availableCity;
      }
    };
    return requestService;
  });
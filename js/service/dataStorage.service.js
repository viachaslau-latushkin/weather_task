angular.module('weatherApp').
  factory('dataStorage', function() {
    var that = {
      availableCity : {
        625144 : {id: 625144, name: 'Minsk'},
        2267057 : {id: 2267057, name: 'Lisbon'},
        611717 : {id: 611717, name: 'Tbilisi'},
        6539761 : {id: 6539761, name: 'Rome'},
      },
      saveData: function () {
        sessionStorage.cityData = angular.toJson(that.availableCity);
      },
      restoreData: function () {
        if(sessionStorage.cityData){
          var cityFromStorage = angular.fromJson(sessionStorage.cityData);
          if(Object.keys(cityFromStorage).length > Object.keys(that.availableCity).length) {
              that.availableCity = cityFromStorage;
          }
          angular.forEach(that.availableCity, function(data) {
            if(data.hasOwnProperty('enable')) {
              delete data['enable'];
            }
          });
        }
        return that.availableCity;
      }
    };
    return that;
  });
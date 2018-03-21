angular.module('weatherApp').
  factory('requestService', ['$http','$q', function($http,$q) {
    var requestService = {
      timestampToTime : function(timestamp) {
        if(timestamp){
          var time = new Date(timestamp * 1000);
          var min = (time.getMinutes() < 10) ? '0'+time.getMinutes() : time.getMinutes();
          return time.getHours() + ':' + min;
        }
      },
      request : function(cityId) {
        var promise = $q.defer();
        $http.get('http://api.openweathermap.org/data/2.5/weather?appid=51ce5e6e026ac1d950f76c5de662c3e9&id='
                    +cityId+'&units=metric').then(function(response) {
          if(response.status != 200)
              promise.reject('error: $http.get does not return answer cod 200. Code id: ' + response.status);
          else if(response.data.cod != 200){
              promise.reject('error: Answer cod property not equal 200');
          }
          else if(!response.hasOwnProperty('data')) {
              promise.reject('error: data property is undefined');
          }
          else {
            response.data.main.temp = Math.round(Number(response.data.main.temp));
            response.data.sys.sunset = requestService.timestampToTime(response.data.sys.sunset);
            response.data.sys.sunrise = requestService.timestampToTime(response.data.sys.sunrise);
            promise.resolve(response.data);
          }
        });
        return promise.promise;
      }
    };
    return requestService;
  }]);
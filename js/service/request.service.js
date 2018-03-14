angular.module('weatherApp').
  factory('requestService', ['$http', function($http) {
    var requestService = {
      timestampToTime : function(timestamp) {
        if(timestamp){
          var time = new Date(timestamp * 1000);
          var min = (time.getMinutes() < 10) ? '0'+time.getMinutes() : time.getMinutes();
          return time.getHours() + ':' + min;
        }
      },
      request : function(cityId) {
        return $http({
          method: 'GET',
          url: 'http://api.openweathermap.org/data/2.5/weather?appid=51ce5e6e026ac1d950f76c5de662c3e9&id='+cityId+'&units=metric'
        }).then(function successCallback(response) {
          if(response.data){
            response.data.main.temp = Math.round(Number(response.data.main.temp));
            response.data.sys.sunset = requestService.timestampToTime(response.data.sys.sunset);
            response.data.sys.sunrise = requestService.timestampToTime(response.data.sys.sunrise);
            return response.data;
          }
        });
      }
    };
    return requestService;
  }]);
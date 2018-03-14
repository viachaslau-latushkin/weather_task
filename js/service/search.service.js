angular.module('weatherApp').
  service('searchService', ['$http', function($http){
    return {
      search: function(keywords){
        return $http.get('http://api.openweathermap.org/data/2.5/find?q='+keywords+'&type=like&sort=population&cnt=30&appid=51ce5e6e026ac1d950f76c5de662c3e9');
      }
    }
  }]);

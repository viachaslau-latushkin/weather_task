angular.module('weatherApp').
  service('searchService', ['$http','$q', function($http,$q){
    return {
      search: function(keywords){
        var promise = $q.defer();
        $http.get('http://api.openweathermap.org/data/2.5/find?q='+keywords+'&type=like&sort=population&cnt=30&appid=51ce5e6e026ac1d950f76c5de662c3e9').then(function(resp){
          if(resp.status != 200)
            promise.reject('error: $http.get does not return answer cod 200. Code id: ' + resp.status);
          else if(resp.data.cod != 200){
            promise.reject('error: Answer cod property not equal 200');
          }
          else if(resp.data.list.length <= 0) {
            promise.reject('error: data.list property is empty');
          }
          else if(resp.data.list.length > 0){
            promise.resolve(resp.data.list);
          }
        });
        return promise.promise;
      }
    }
  }]);

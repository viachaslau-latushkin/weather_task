angular.module('weatherApp').
  directive('mainPanel',['requestService','dataStorage',function(requestService,dataStorage){
    return {
      restrict:"A",
      templateUrl: "../html/selectCity.html",
      link: function(scope,element,attr){
        scope.add = function(selectedCityId){
          if(!selectedCityId){
            alert("Choose a city!");
            return;
          }
          if(scope.availableCity[selectedCityId].hasOwnProperty('id')) {
            if(scope.selectedArray.length === 0 || !scope.selectedArray[selectedCityId]) {
              var data = scope.availableCity[selectedCityId].hasOwnProperty('data');
              if(!data || (data && (Math.floor(Date.now() / 1000) - scope.availableCity[selectedCityId].data.coord.dt > 3600))) {
                scope.makeRequest(selectedCityId);
              }
              else{
                scope.selectedArray[selectedCityId] = scope.availableCity[selectedCityId];
                scope.availableCity[selectedCityId].enable = false;
              }
            }
            scope.selectedCityId = '';
          }
          else {
            console.log("error : selectedCity does't have id");
          }
        };

        scope.showHide = function(obj) {
          return (Object.keys(obj).length === 0 && obj.constructor === Object) ? false : true;
        };
        
        scope.makeRequest = function(selectedCityId) {
          return requestService.request(selectedCityId).then(function(data){
            scope.availableCity[selectedCityId].data = data;
            dataStorage.saveData();
            scope.selectedArray[selectedCityId] = scope.availableCity[selectedCityId];
            scope.availableCity[selectedCityId].enable = false;
          });
        }
      }
    }
  }]);
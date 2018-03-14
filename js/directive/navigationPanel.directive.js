angular.module('weatherApp').
  directive('navigationPanel',function(){
    return {
      restrict:"A",
      templateUrl: "html/navigationPanel.html"
    };
  });
(function(){

'use strict'

var mainController = function ($scope,sections) {

      $scope.battles = sections.battles;

    angular.forEach($scope.battles,function(val,i){
        //add country name to to battles def and inv
        val.def.name = sections.countries[val.def.id].name;
        val.inv.name = sections.countries[val.inv.id].name;
                              
  });


  /*
  * Orderby filter logic
  */

  //name of order by def/inv/all
  $scope.countryName = "";
  //order a-z/z-a
  $scope.startName = false;

  //orderby method
  $scope.orderCountries = function(name,action) {
      //if second click
      if(name === $scope.countryName) {
          //change filter order form a-z / z-a
          $scope.startName = !$scope.startName;
          //change up/down arrow
          $scope[action] = $scope.startName;
      //if first time click 
      } else {
        //select order by def/inv/all
        $scope.countryName = name;
        //change to down arrow 
        $scope[action] = $scope.startName;
      }
      //change arrow color to green 
      $scope.actionClick = action;
  };

};

mainController.$inject = ['$scope','sections'];

angular.module('mainCtrl',[]).controller('mainCtrl', mainController);

})();
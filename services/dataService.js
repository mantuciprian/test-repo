(function(){
    
    'use strict'

var gameData = function ($http) {
    var promise = $http.get("https://www.erepublik.com/en/military/campaigns-new");
    return {
        getList: function () {
            return promise.then(function (response) {
                var list = response.data;
                return list;
            })
        }
    }
};

gameData.$inject = ['$http'];

angular.module('gameData',[]).factory('gameData', gameData);

})();

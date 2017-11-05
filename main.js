angular.module('app', ['ui.router', 'ui.bootstrap', 'angularUtils.directives.dirPagination',
                       'gameData','toArray','searchCountry','mainCtrl'])

.config(['$stateProvider', '$urlRouterProvider', 
function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('main', {
                url: '/',
                templateUrl: '/partials/main.html',
                controller: 'mainCtrl',
                resolve: {
                    sections: ['$http', 'gameData', function ($http, gameData) {
                        return gameData.getList();
                    }]
                }
            })
        }]);
   
   
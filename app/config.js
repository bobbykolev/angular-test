(function () {
    'use strict';

    var app = angular.module('app');

    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.
          when('/', {
            templateUrl: 'app/modules/home/home.html',
            controller: 'Home',
            controllerAs: 'that'
          }).
          when('/admin', {
            templateUrl: 'app/modules/admin/admin.html',
            controller: 'Admin',
            controllerAs: 'that'
          }).
          otherwise({
            redirectTo: '/'
          });
    }]);


})();
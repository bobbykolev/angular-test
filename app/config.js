(function () {
    'use strict';

    var app = angular.module('app');

    var events = {
        controllerActivateSuccess: 'controller.activateSuccess',
        spinnerToggle: 'spinner.toggle'
    };

    var config = {
        events: events
    };

    app.value('config', config);

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

    app.config(['commonConfigProvider', function (cfg) {
        cfg.config.controllerActivateSuccessEvent = config.events.controllerActivateSuccess;
        cfg.config.spinnerToggleEvent = config.events.spinnerToggle;
    }]);

})();
﻿(function() {
    'use strict';

    var app = angular.module('app', [
        // Angular modules 
        'ngAnimate',
        'ngRoute',
        'ngSanitize',
        'common'
    ]);

    // Handle routing errors and success events
    app.run(['$route',
        function($route) {
            // Include $route to kick start the router.
        }
    ]);
})();
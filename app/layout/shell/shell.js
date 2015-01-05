(function() {
 'use strict';

	var app = angular.module('app');

	app.controller('Shell', [Shell]);

	/*Shell.$inject = ['$rootScope', 'common', 'config'];*/

	function Shell($rootScope, common, config) {
        var that = this;

        that.shellTxt = 'Shell!';
    }

})();
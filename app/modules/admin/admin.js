(function() {
	'use strict';

	var app = angular.module('app');

	app.controller('Admin', Admin);
	Admin.$inject = ['common'];

	function Admin(common) {
		var that = this;

		that.adminTxt = 'Admin bla bla';

		activate();

        function activate() {
            common.activateController([], 'admin');
        }
	}

})();
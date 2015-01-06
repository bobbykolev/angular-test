(function() {
	'use strict';

	var app = angular.module('app');

	app.controller('Home', Home);
	Home.$inject = ['common', '$timeout'];

	function Home(common, $timeout) {
		var that = this;

		that.homeTxt = 'Bla bla home';

		//$timeout(function(){activate()}, 2000);//test loading 
		activate();

        function activate() {
			common.activateController([], 'home');
        }
	}

})();
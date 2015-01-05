(function() {
	 'use strict';

	var app = angular.module('app');

	app.controller('Home', Home);

	function Home() {
		var that = this;

		that.homeTxt = 'Bla bla home';
	}

})();
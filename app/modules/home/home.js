(function() {
	'use strict';

	var app = angular.module('app');

	app.controller('Home', Home);
	Home.$inject = ['common', '$timeout', 'places'];

	function Home(common, $timeout, places) {
		var that = this;
		that.people = [];
		that.homeTxt = 'Home';

		//$timeout(function(){activate()}, 2000);//test loading 
		activate();

        function activate() {
			var promises = [getPlaces()];
			common.activateController(promises, 'home');
        }

        function getPlaces() {
            return places.getPlaces().then(function (data) {
				return that.places = data;
			});
        }
	}

})();
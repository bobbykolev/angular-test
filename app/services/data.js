(function () {
    'use strict';

    angular.module('app').factory('places', places);
    places.$inject = ['common'];

    function places(common) {
        var $q = common.$q;

        var service = {
            getPlaces: getPlaces,
            getMessageCount: getMessageCount
        };

        return service;

        function getMessageCount() { return $q.when(72); }

        function getPlaces() {
            var places = [
                {
                    name: 'Loram'
                },
                {
                    name: 'ipsum'
                },
                {
                    name: 'lorizle'
                },
                {
                    name: 'shizle'
                },
                {
                    name: '...'
                }
            ];
            return $q.when(places);
        }
    }
})();
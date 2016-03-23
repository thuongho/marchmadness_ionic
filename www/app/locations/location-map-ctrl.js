(function(){
  'use strict';

  angular.module('bballApp').controller('LocationMapCtrl', ['$scope', '$stateParams', function ($stateParams, $scope) {
    var vm = this;

    vm.locationId = Number($stateParams.id);

    $scope.map = {
      center: {
        latitude: 38.897677,
        longitude: -77.036530
      },
      zoom: 12
    };

    // $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };

    vm.marker = {};

  }]);
})();
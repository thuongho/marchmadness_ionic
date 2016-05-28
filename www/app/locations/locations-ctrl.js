(function(){
  'use strict';

  angular.module('bballApp').controller('LocationsCtrl', ['$scope', function ($scope) {
      var vm = this;

      vm.locations = [
      {
        id: 1,
        name: "home"
      },
      {
        id: 2,
        name: "school"
      }
      ]
  }]);
})();
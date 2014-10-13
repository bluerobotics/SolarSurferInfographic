(function(window, angular, undefined) {

'use strict';

var controllers = angular.module('app.controllers', []);

controllers.controller('NavbarCtrl', ['$scope', '$location',
  function ($scope, $location) {
    $scope.isActive = function (navBarPath) {
      return navBarPath === $location.path().split('/')[1];
    };

    // init the LiveTelemetry process for the app
    // LiveTelemetry.init();
    // LiveCommand.init();

    // // initial data
    // $scope.last_update = {};
    // var items = LiveTelemetry.items();
    // if(items.length > 0)
    //   angular.extend($scope.last_update, items[0]);

    // // respond to LiveTelemetry updates
    // $scope.$on('telemetry-update', function(event, items) {
    //   if(items.length > 0)
    //     angular.extend($scope.last_update, items[items.length - 1]);
    // });
  }]);

controllers.controller('StaticCtrl', ['$scope', '$rootScope',
  function ($scope, $rootScope) {
    // a generic static content controller
  }]);

})(window, window.angular);

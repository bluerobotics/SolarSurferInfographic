(function(window, angular, undefined) {
'use strict';

var module = angular.module('divider', []);

module.directive('divider', [
  function() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {
        src: '@'
      },
      template: '<div class="divider" style="background-image: url({{src}});"><div></div></div>',
      replace: true
    };
  }]);

})(window, window.angular);

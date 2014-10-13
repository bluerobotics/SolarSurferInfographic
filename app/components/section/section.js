(function(window, angular, undefined) {
'use strict';

var module = angular.module('section', []);

module.directive('section', [
  function() {
    return {
      restrict: 'E',
      transclude: true,
      template: '<div class="section anchor-wrapper"><div ng-transclude></div></div>',
      replace: true
    };
  }]);

module.directive('sectionTitle', [
  function() {
    return {
      restrict: 'E',
      transclude: true,
      template: '<div class="section-heading"><h3 class="section-title" ng-transclude></h3></div>',
      replace: true
    };
  }]);

module.directive('sectionBody', [
  function() {
    return {
      restrict: 'E',
      transclude: true,
      template: '<div class="section-body" ng-transclude></div>',
      replace: true
    };
  }]);

module.directive('sectionFooter', [
  function() {
    return {
      restrict: 'E',
      transclude: true,
      template: '<div class="section-footer text-muted" ng-transclude></div>',
      replace: true
    };
  }]);

})(window, window.angular);

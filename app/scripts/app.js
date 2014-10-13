(function(window, angular, undefined) {

'use strict';

// declare app level module
var app = angular.module('app', [
    // angular modules
    'ngRoute',
    'ngCookies',
    'ngResource',
    // third-party modules
    'ui.bootstrap',
    'google-maps',
    'highcharts-ng',
    'angularMoment',
    'duScroll',
    // app modules
    // 'app.filters',
    // 'app.services',
    // 'app.directives',
    'app.controllers',
    // components
    'section',
    'divider'
]);

app.value('version', '0.1.0');
app.value('duScrollGreedy', true);

app.config(['$routeProvider', '$httpProvider', '$locationProvider',
    function($routeProvider, $httpProvider, $locationProvider) {
        // html5mode
        $locationProvider.html5Mode(true);

        // routes
        $routeProvider.when('/', {
            templateUrl: 'templates/home.html',
            controller: 'StaticCtrl',
            reloadOnSearch: false
        });
        $routeProvider.otherwise({redirectTo: '/'});
    }]);

app.directive('appVersion', ['version',
    function(version) {
        return function(scope, elm, attrs) {
            elm.text(version);
        };
    }]);

// hide moment Date() fallback warning
window.moment.suppressDeprecationWarnings = true;

})(window, window.angular);

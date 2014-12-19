'use strict';

/**
 * @ngdoc overview
 * @name ogpSandboxApp
 * @description
 * # ogpSandboxApp
 *
 * Main module of the application.
 */
angular
  .module('ogpSandboxApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/twitter', {
        templateUrl: 'views/twitter.html',
        controller: 'TwitterCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

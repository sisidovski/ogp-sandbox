'use strict';

/**
 * @ngdoc function
 * @name ogpSandboxApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ogpSandboxApp
 */
angular.module('ogpSandboxApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

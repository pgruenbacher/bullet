'use strict';

/**
 * @ngdoc function
 * @name bulletApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bulletApp
 */
angular.module('bulletApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

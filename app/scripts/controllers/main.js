'use strict';

/**
 * @ngdoc function
 * @name formHelperApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the formHelperApp
 */
angular.module('formHelperApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

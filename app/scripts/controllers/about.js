'use strict';

/**
 * @ngdoc function
 * @name formHelperApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the formHelperApp
 */
angular.module('formHelperApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

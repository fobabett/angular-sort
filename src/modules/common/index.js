'use strict';

module.exports =
  angular.module('angular-sort.common', [
    require('./directives').name,
    require('./filters').name,
    require('./services').name
  ]);

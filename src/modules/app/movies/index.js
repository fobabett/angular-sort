'use strict';

module.exports =
  angular.module('angular-sort.movies', [
    //load your foo submodules here, e.g.:
    //require('./bar').name
  ])
  .config(function ($stateProvider) {
    $stateProvider
    .state('movies', {
      url: '/',
      params: {scrollTo: null},
      templateUrl: 'app/movies/layout.html',
      controller: 'movieController'
    });
  })
  .controller('movieController', require('./movieController'));

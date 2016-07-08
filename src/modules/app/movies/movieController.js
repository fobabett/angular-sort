'use strict';

module.exports = /*@ngInject*/
  function movieController($scope) {
    $scope.movies = [
      {title: 'Star Wars', pos: 1},
      {title: 'Lord of the Rings', pos: 2},
      {title: 'Avengers', pos:3},
      {title: 'Kill Bill', pos:4},
      {title: 'Avatar', pos:5}
    ];
  };

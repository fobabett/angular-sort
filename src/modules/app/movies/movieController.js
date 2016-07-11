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

    $scope.movies.sort(function(a, b) {
      return a.pos > b.pos
    });

    $scope.sortingLog = [];

    $scope.sortableOptions = {
      // 'ui-floating': true,
      stop: function(e, ui) {
        for (var index in $scope.movies) {
          $scope.movies[index].pos = index;
        }
      }
    };

    function updatePosition () {
      console.log($scope.movies)
    }

  };

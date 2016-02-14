console.log("main.js main controller");

var ctrl = angular.module('mainController', []);

ctrl.controller('main', ['$scope', 'songsApi', function($scope, songsApi){

  $scope.songs = {};

  $scope.songs = songsApi.getAll().then(function(response){
    // debugger
      $scope.songs = response.data.songs;
  });

  // $scope.masterSong = angular.copy($scope.newSong);

    $scope.updateSongs = function(){
        songsApi.getAll().then(function(response){
            $scope.songs = response.data.songs;
        });
    };

    $scope.create = function(){
      songsApi.create($scope.newSong).then(function(){
        $scope.updateSongs();
      });
    };

    $scope.destroy = function( id ){
      songsApi.destroy(id).then(function(){
        $scope.updateSongs();
      });
    };

    function init(){
      $scope.updateSongs();
    }
    init();
}]);

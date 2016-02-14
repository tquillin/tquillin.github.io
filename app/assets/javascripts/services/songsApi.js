console.log(" service songsApi.js");


var api = angular.module('songsApiFactory', []);

api.factory('songsApi', ['$http', function($http){

  var baseUrl = 'http://localhost:3000/api/songs/';

  var songsInterface = {};

  songsInterface.getAll = function(){
      return $http.get(baseUrl);
  };

  songsInterface.create = function(newSong){
      var payload = { song: newSong };
      return $http.post(baseUrl, payload);
  };

  songsInterface.destroy = function( id ){
    return $http.delete(baseUrl + id);
  };

  return songsInterface;

}]);

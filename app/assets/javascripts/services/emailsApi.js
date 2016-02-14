console.log(" service emailsApi.js");


var api = angular.module('emailsApiFactory', []);

api.factory('emailsApi', ['$http', function($http){

  var baseUrl = 'http://localhost:3000/api/emails/';

  var emailsInterface = {};

  emailsInterface.getAll = function(){
      return $http.get(baseUrl);
  };

  emailsInterface.create = function(newEmail){
      var payload = { email: newEmail };
      return $http.post(baseUrl, payload);
  };

  emailsInterface.destroy = function( id ){
    return $http.delete(baseUrl + id);
  };

  return emailsInterface;

}]);

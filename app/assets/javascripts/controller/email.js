console.log("email.js main controller");

var ctrl = angular.module('emailMainController', []);

ctrl.controller('emailMain', ['$scope', 'emailsApi', function($scope, emailsApi){

  $scope.emails = {};

  $scope.emails = emailsApi.getAll().then(function(response){
      $scope.emails = response.data.emails;
  });


    $scope.updateEmails = function(){
        emailsApi.getAll().then(function(response){
            $scope.emails = response.data.emails;
        });
    };

    $scope.create = function(){
      emailsApi.create($scope.newEmail).then(function(){
        $scope.updateEmails();
      });
    };


    $scope.destroy = function( id ){
      emailsApi.destroy(id).then(function(){
        $scope.updateEmails();
      });
    };

    function initTwo(){
      $scope.updateEmails();
    }
    initTwo();
}]);

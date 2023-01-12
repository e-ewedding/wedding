(function(window) {


  angular.module("myApp").controller( 'rsvpCtrl', function( $scope,  $timeout,$modalInstance)
  {
    $scope.ok = function () {
      $modalInstance.close();
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };


  });
})(window);

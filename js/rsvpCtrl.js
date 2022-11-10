(function(window) {


  angular.module("myApp").controller( 'rsvpCtrl', function( $scope,  $timeout,$modalInstance)
  {
    $scope.ok = function () {
      $modalInstance.close();
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };

    $scope.guestList =
      [
        {guest:"Elliot",pw:"123"}
      ]

    $scope.verify = function()
    {
      $scope.verified = _.find($scope.guestList,{pw:$scope.password})
      sessionStorage.setItem("guest",$scope.verified.guest)
    }
    function init()
  {
    $scope.verified = _.find($scope.guestList,{guest:sessionStorage.getItem("guest")})
  }
    init()
  });
})(window);

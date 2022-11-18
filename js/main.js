(function(window) {
  var testApp = window.testApp;

  testApp = angular.module( 'myApp', ['ngAnimate','ui.bootstrap'] );

  testApp.controller( 'MainCtrl', function( $scope,  $timeout,$modal,)
  {
    const ny = document.querySelector('#ny');
    const fr = document.querySelector('#fr');
    const mtl = document.querySelector('#mtl');
    const navbar = document.querySelector('#navbar');
    $scope.selectedEvent = 'all'
    $scope.animate = true;
    $scope.openRsvpModal = function()
    {
      var modalInstance = $modal.open({
        templateUrl: 'rsvp.html',
        controller: 'rsvpCtrl',
        size: 'lg',
      });

      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      }, function () {
      });
    };
$scope.tableOfContents =
  {
    ny:
      [
        "Springville",
        "the cabin",
        "Where to eat",
        "Where to stay",
        "Timeline"
      ],
    mtl: [
      "Tubing",
      "Hot chocolate",
      "Poutine",
      "5-a-7"
    ],
    fr: [
      "the gers",
      "The lake",
      "Where to eat",
      "Where to stay",
      "Timeline"
    ]
  };

    $scope.getFieldClass = function(entry){
      if ($(window).width() <= 768) {
        switch (entry)
        {
          case "ny":
            return {"fr": true};
          case "fr":
            return {"ny": true};
          case "mtl":
            return {"mtl-navbar":true};
          default:
            return {};
        }
      }

    }

    $scope.back = function()
    {
      navbar.style.height = "0vh"
      ny.style.width = "50%";
      fr.style.width = "50%";
      mtl.style.width = "100%";
      ny.style.height = "80vh";
      fr.style.height = "80vh";
      mtl.style.height = "20vh";
      $scope.selectedEvent = 'all'
      $scope.animate = true;
      $scope.hideRsvp = false;
    }
    $scope.selectEvent = function(event)
    {
      $scope.animate = false;
      $scope.hideRsvp = true;
      switch(event)
      {
        case 'ny':
          ny.style.width = "100%";
          ny.style.height = "95vh";
          fr.style.width = "0%";
          mtl.style.height = "0vh";
          navbar.style.height = "5vh"
          break;
        case 'mtl':
          ny.style.height = "0vh";
          fr.style.height = "0vh";
          mtl.style.height = "95vh";
          navbar.style.height = "5vh"
          break;
        case 'fr':
          ny.style.width = "0%";
          fr.style.width = "100%";
          fr.style.height = "95vh";
          navbar.style.height = "5vh"
          mtl.style.height = "0vh";
          break;
      }

      $timeout(function () {
          $scope.selectedEvent= event;
        },
        1000)
    }
  });
})(window);

(function(window) {
  var testApp = angular.module( 'myApp', ['ngAnimate','ui.bootstrap'] );
  testApp.controller( 'MainCtrl', function( $scope,  $timeout,$modal,)
  {
    $scope.guestList =
      [
        {name:"Elliot1",pw:"1",invites:["fr"]},
        {name:"Elliot2",pw:"2",invites:["fr","ny","mtl"]},
        {name:"Elliot3",pw:"3",invites:["fr","ny"]},
        {name:"Elliot3",pw:"4",invites:["mtl"]},
      ];

    $scope.invited = function(event)
    {
      return $scope.guest.invites.includes(event);
    }

    $scope.password = {text:null}
    $scope.guest = _.find($scope.guestList,{guest:sessionStorage.getItem("guest")}) ? _.find($scope.guestList,{guest:sessionStorage.getItem("guest")}) : false;
      $scope.verify = function()
    {
      let guest = _.find($scope.guestList,{pw:$scope.password.text})
      if(guest)
      {
        $scope.guest = guest
        $scope.invalid = false;
        sessionStorage.setItem("guest",$scope.guest.name)
        $timeout(function()
        {
          $scope.ny = document.querySelector('#ny');
          $scope.fr = document.querySelector('#fr');
          $scope.mtl = document.querySelector('#mtl');
          $scope.navbar = document.querySelector('#navbar');
        })

      }
      else
      {
        $scope.invalid = true;
      }
    }
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
      "About",
      "Accommodation",
      "Things to do",
      "The Celebration",
      "What to bring"
    ]
  };

    $scope.getFieldClass = function(entry){
      if ($(window).width() <= 975) {
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
    addEventListener("resize", (event) =>
    {
      if($scope.selectedEvent)
      {
        if ($(window).width() <= 975) {
          switch ($scope.selectedEvent)
          {
            case "ny":
              $scope.navbar.style
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
    });
    $scope.back = function()
    {
      navbar.style.height = "0vh"
      $scope.selectedEvent = 'all'
      $scope.animate = true;
      $scope.hideRsvp = false;
      if($scope.guest.invites.length === 3)
      {
        $scope.ny.style.width = "50%";
        $scope.fr.style.width = "50%";
        $scope.mtl.style.width = "100%";
        $scope.ny.style.height = "calc(100vh - 375px)";
        $scope.fr.style.height = "calc(100vh - 375px)";
        $scope.mtl.style.height = "375px";
      }else if($scope.invited('fr') && $scope.invited('ny') && !$scope.invited('mtl'))
      {
        $scope.ny.style.width = "50%";
        $scope.fr.style.width = "50%";
        $scope.mtl.style.width = "0%";
        $scope.ny.style.height = "100vh";
        $scope.fr.style.height = "100vh";
        $scope.mtl.style.height = "0vh";
      }
      else if($scope.guest.invites.length === 1)
      {
        $scope[$scope.guest.invites[0]].width = "100%";
        $scope[$scope.guest.invites[0]].height = "100vh";
      }








    }
    $scope.selectEvent = function(event)
    {
      $scope.animate = false;
      $scope.hideRsvp = true;
      switch(event)
      {
        case 'ny':
          $scope.ny.style.width = "100%";
          $scope.ny.style.height = "95vh";
          $scope.fr.style.width = "0%";
          $scope.mtl.style.height = "0vh";
          $scope.navbar.style.height = "5vh"
          break;
        case 'mtl':
          $scope.ny.style.height = "0vh";
          $scope.fr.style.height = "0vh";
          $scope.mtl.style.height = "95vh";
          $scope.navbar.style.height = "5vh"
          break;
        case 'fr':
          $scope.ny.style.width = "0%";
          $scope.fr.style.width = "100%";
          $scope.fr.style.height = "95vh";
          $scope.navbar.style.height = "5vh"
          $scope.mtl.style.height = "0vh";
          break;
      }

      $timeout(function () {
          $scope.selectedEvent= event;
        },
        1000)
    }
  });
})(window);

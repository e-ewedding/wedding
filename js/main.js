(function(window) {
  var testApp = angular.module( 'myApp', ['ngAnimate','ui.bootstrap'] );
  testApp.controller( 'MainCtrl', function( $scope,  $timeout,$modal,)
  {
    $scope.guestList =
      [
        {name:"Elliot1",pw:"1",invites:["fr"]},
        {name:"Elliot2",pw:"2",invites:["ny"]},
        {name:"Elliot3",pw:"3",invites:["fr","ny"],vip:true},
        {name:"Elliot3",pw:"4",invites:["mtl"]},
      ];
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
        $scope.invalid = false;
        sessionStorage.setItem("guest",guest.name)
        loginGuest(guest)

      }
      else
      {
        $scope.invalid = true;
      }
    }
    function loginGuest(guest)
    {
      $scope.guest = guest
      if(guest.vip)
      {
        $scope.tableOfContents.ny.unshift("Niagara")
      }
      $timeout(function()
      {
        $scope.ny = document.querySelector('#ny');
        $scope.fr = document.querySelector('#fr');
        $scope.mtl = document.querySelector('#mtl');
        $scope.navbar = document.querySelector('#navbar');
      })
    }

    let init = function()
    {
      if(sessionStorage.getItem("guest"))
      {
        loginGuest(_.find($scope.guestList,{name:sessionStorage.getItem("guest")}))
      }
    }
    init()
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
      }, function (e)
      {
        console.log(e)
      });
    };


  $scope.isMobile = function()
  {
    return ($(window).width() <= 974)
  }

    $scope.back = function()
    {
      $scope.selectedEvent = 'all'
      $scope.animate = true;
      $scope.hideRsvp = false;

      if($scope.invited('fr') && $scope.invited('ny') && !$scope.invited('mtl'))
      {
        $scope.ny.classList.remove("main-container-expanded")
        $scope.fr.classList.remove("main-container-expanded")
        $scope.fr.classList.remove("main-container-shrunk")
        $scope.ny.classList.remove("main-container-shrunk")
      }
      else if($scope.guest.invites.length === 1)
      {
        $scope[$scope.guest.invites[0]].classList.remove("main-container-shrunk")
        $scope[$scope.guest.invites[0]].classList.remove("main-container-expanded")
      }
    }

    $scope.selectEvent = function(event)
    {
      $scope.animate = false;
      $scope.hideRsvp = true;
      switch(event)
      {
        case 'ny':
          $scope.ny.classList.add("main-container-expanded")
          $scope.fr.classList.add("main-container-shrunk")
          break;
        case 'fr':
          $scope.fr.classList.add("main-container-expanded")
          $scope.ny.classList.add("main-container-shrunk")
          break;
      }

      $timeout(function () {
          $scope.selectedEvent= event;
        },
        1000)
    }
  });
})(window);

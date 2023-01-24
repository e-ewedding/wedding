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
    $scope.detailsFr =
      [
        {
        section:'ABOUT',
        content:
          [
            {
              title:'THE VENUE',
              text:'Our venue is Château Lacoste, an 18th century chateau located just outside the pretty medieval village of Lupiac in south-west France. The chateau looks over Lupiac lake, which is just a few minutes walk down the hill, as well as views of the Pyrenees mountains to the south. Guests will be able to relax on the beach at the lake '
            },
            {
              title:'ABOUT THE GERS',
              text:'The Gers is an area in south-west France, located in modern-day Gascony. It’s the most rural department in the whole of France, and is often referred to as French Tuscany due to its beautiful rolling hills and strong focus on food, wine and agriculture. '
            },
            {
              title:'ABOUT LUPIAC',
              text:'Lupiac is a pretty medieval village originally founded in 1090. It’s most famous for being the birthplace and childhood home of Charles de Batz Castelmore (otherwise known as D’Artagnan) who was born in Lupiac in 1613 and was the inspiration behind his namesake’s character in Alexandre Dumas’ “The Three Musketeers”. You can find a statue commemorating D’Artagnan in Lupiac itself, or drive 40 minutes to Condom to see the iconic statue of D’Artagnan with the other three musketeers.  '
            },
          ]
        },
        {
          section: 'ACCOMMODATION',
          content:
            [
              {
                title:'Château Lacoste',
                text: 'placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text placeholder text '
              },
              {
                title: 'Rooms at the château',
                text: 'The chateau has enough beds to sleep up to 60 people, although some guests will have to share rooms with other guests. When you RSVP, you’ll be asked to specify your accommodation preferences so we can assign you a room accordingly. For those interested, we also have the option of creating a campsite in the chateau grounds, which, with the area being so remote, are perfect for stargazing. '
              },
              {
                title: 'Nearby accommodation',
                text: ' If you’d prefer to stay locally, we can help you organise accommodation and arrange transport to and from the venue. Here are a few of our recommendations: '
              }
            ]
        }
      ]

$scope.getContent = function(event,section)
    {
     switch (event)
     {
       case 'fr':
         return _.find($scope.detailsFr,{section})
     }
    }


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
  })
    .directive("eventItem", function () {
      return {
        restrict: "E",
        templateUrl: "eventItem.html",
        replace:true,
        scope: {
          icon: "=",
          text: "=",
          title: "=",
          right: "=",
          content: "=",
        },
        link: function ($scope) {
          console.log($scope.content)
        }
      }
    });
})(window);

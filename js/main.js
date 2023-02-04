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
            "About",
            "Accommodation",
            "Things to do",
            "The Celebration"
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
          "Information"
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
              text:'Our venue is Château Lacoste, an 18th century chateau located just outside the pretty medieval village of Lupiac in south-west France. The chateau looks over Lupiac lake, which is just a few minutes walk down the hill, as well as views of the Pyrenees mountains to the south. Guests will be able to relax on the beach at the lake ',
              icon: 'img/castle.png'
            },
            {
              title:'ABOUT THE GERS',
              text:'The Gers is an area in south-west France, located in modern-day Gascony. It’s the most rural department in the whole of France, and is often referred to as French Tuscany due to its beautiful rolling hills and strong focus on food, wine and agriculture. ',
              icon: 'img/fleurdelis.png'
            },
            {
              title:'ABOUT LUPIAC',
              text:'Lupiac is a pretty medieval village originally founded in 1090. It’s most famous for being the birthplace and childhood home of Charles de Batz Castelmore (otherwise known as D’Artagnan) who was born in Lupiac in 1613 and was the inspiration behind his namesake’s character in Alexandre Dumas’ “The Three Musketeers”. You can find a statue commemorating D’Artagnan in Lupiac itself, or drive 40 minutes to Condom to see the iconic statue of D’Artagnan with the other three musketeers.  ',
              icon: 'img/village.png'
            },
          ]
        },
        {
          section: 'ACCOMMODATION',
          content:
            [
              {
                title: 'Rooms at the château'.toUpperCase(),
                text: 'The chateau has enough beds to sleep up to 60 people, although some guests will have to share rooms with other guests. When you RSVP, you’ll be asked to specify your accommodation preferences so we can assign you a room accordingly. For those interested, we also have the option of creating a campsite in the chateau grounds, which, with the area being so remote, are perfect for stargazing. ',
                icon: 'img/heart-key.png'
              },
              {
                title: 'Nearby accommodation'.toUpperCase(),
                text: ' If you’d prefer to stay locally, we can help you organise accommodation and arrange transport to and from the venue. Here are a few of our recommendations:',
                icon: 'img/hostel.png'
              }
            ]
        },
        {
          section: 'THINGS TO DO',
          content:
            [
              {
                title: 'Local gastronomy'.toUpperCase(),
                text: 'The chateau has enough beds to sleep up to 60 people, although some guests will have to share rooms with other guests. When you RSVP, you’ll be asked to specify your accommodation preferences so we can assign you a room accordingly. For those interested, we also have the option of creating a campsite in the chateau grounds, which, with the area being so remote, are perfect for stargazing. ',
                icon: 'img/cutlery.png'
              },
              {
                title: 'Restaurants & markets'.toUpperCase(),
                text: ' If you’d prefer to stay locally, we can help you organise accommodation and arrange transport to and from the venue. Here are a few of our recommendations:',
                icon: 'img/duck.png'
              },
              {
                title: 'Lakes and water parks'.toUpperCase(),
                text: ' If you’d prefer to stay locally, we can help you organise accommodation and arrange transport to and from the venue. Here are a few of our recommendations:',
                icon: 'img/wave.png'
              },
              {
                title: 'Wine & armagnac tasting'.toUpperCase(),
                text: ' If you’d prefer to stay locally, we can help you organise accommodation and arrange transport to and from the venue. Here are a few of our recommendations:',
                icon: 'img/winetasting.png'
              },
              {
                title: 'Nearby towns, medieval villages, historical sites'.toUpperCase(),
                text: ' If you’d prefer to stay locally, we can help you organise accommodation and arrange transport to and from the venue. Here are a few of our recommendations:',
                icon: 'img/map-point.png'
              },
              {
                title: 'Day trips'.toUpperCase(),
                text: ' If you’d prefer to stay locally, we can help you organise accommodation and arrange transport to and from the venue. Here are a few of our recommendations:',
                icon: 'img/compass.png'
              },
            ]
        },
        {
          section: 'THE CELEBRATION',
          content:
            [
              {
                title: 'Day 1: Welcome'.toUpperCase(),
                text: 'The chateau has enough beds to sleep up to 60 people, although some guests will have to share rooms with other guests. When you RSVP, you’ll be asked to specify your accommodation preferences so we can assign you a room accordingly. For those interested, we also have the option of creating a campsite in the chateau grounds, which, with the area being so remote, are perfect for stargazing. ',
                icon: 'img/cheese.png'
              },
              {
                title: 'Day 2: The main event'.toUpperCase(),
                text: ' If you’d prefer to stay locally, we can help you organise accommodation and arrange transport to and from the venue. Here are a few of our recommendations:',
                icon: 'img/party.png'
              },
              {
                title: 'Battle of the Guests'.toUpperCase(),
                text: ' If you’d prefer to stay locally, we can help you organise accommodation and arrange transport to and from the venue. Here are a few of our recommendations:',
                icon: 'img/battle.png'
              },
              {
                title: 'The Ceremony'.toUpperCase(),
                text: ' If you’d prefer to stay locally, we can help you organise accommodation and arrange transport to and from the venue. Here are a few of our recommendations:',
                icon: 'img/confetti.png'
              },
              {
                title: 'Day 3: Beach day'.toUpperCase(),
                text: ' If you’d prefer to stay locally, we can help you organise accommodation and arrange transport to and from the venue. Here are a few of our recommendations:',
                icon: 'img/bikini.png'
              }
            ]
        },
        {section: 'INFORMATION',
          content:
            [
              {
                title: "FRENCH CULTURE",
                text: "In France, the role of the waiter is viewed as one of a facilitator, rather than a constant presence. They are there to help and answer questions, but they don't hover and they don't feel the need to check in constantly. French diners are expected to be more self-sufficient and to be able to flag down a waiter if they need something. Tipping culture in France is generally more modest than in the US. Service is often included in prices, and 5-10% tip is considered sufficient for good service. In restaurants and cafes, rounding up the bill or leaving small change is common. Things will usually be closed on Sundays, Mondays and at lunchtime In French restaurants, it is common to offer set menus, also known as \"menu du jour\" or \"menu fixe\". These are pre-set meals that typically include a starter, main course and dessert, and sometimes also include a glass of wine or aperitif. The set menu is usually a good value and offers a variety of dishes to choose from at a fixed price, it is also a good way to try different dishes from the restaurant's menu.",
                icon: "img/croissant.png"
              },{
                title: "CAR RENTALS",
                text: "In France, the role of the waiter is viewed as one of a facilitator, rather than a constant presence. They are there to help and answer questions, but they don't hover and they don't feel the need to check in constantly. French diners are expected to be more self-sufficient and to be able to flag down a waiter if they need something. Tipping culture in France is generally more modest than in the US. Service is often included in prices, and 5-10% tip is considered sufficient for good service. In restaurants and cafes, rounding up the bill or leaving small change is common. Things will usually be closed on Sundays, Mondays and at lunchtime In French restaurants, it is common to offer set menus, also known as \"menu du jour\" or \"menu fixe\". These are pre-set meals that typically include a starter, main course and dessert, and sometimes also include a glass of wine or aperitif. The set menu is usually a good value and offers a variety of dishes to choose from at a fixed price, it is also a good way to try different dishes from the restaurant's menu.",
                icon: "img/car.png"
              },{
                title: "ONWARDS TRAVEL",
                text: "In France, the role of the waiter is viewed as one of a facilitator, rather than a constant presence. They are there to help and answer questions, but they don't hover and they don't feel the need to check in constantly. French diners are expected to be more self-sufficient and to be able to flag down a waiter if they need something. Tipping culture in France is generally more modest than in the US. Service is often included in prices, and 5-10% tip is considered sufficient for good service. In restaurants and cafes, rounding up the bill or leaving small change is common. Things will usually be closed on Sundays, Mondays and at lunchtime In French restaurants, it is common to offer set menus, also known as \"menu du jour\" or \"menu fixe\". These are pre-set meals that typically include a starter, main course and dessert, and sometimes also include a glass of wine or aperitif. The set menu is usually a good value and offers a variety of dishes to choose from at a fixed price, it is also a good way to try different dishes from the restaurant's menu.",
                icon: "img/luggage.png"
              },
            ]
        }
      ];
    $scope.detailsNy =
      [
        {
        section:'ABOUT',
        content:
          [
            {
              title:'THE VENUE',
              text:'Our venue is Château Lacoste, an 18th century chateau located just outside the pretty medieval village of Lupiac in south-west France. The chateau looks over Lupiac lake, which is just a few minutes walk down the hill, as well as views of the Pyrenees mountains to the south. Guests will be able to relax on the beach at the lake ',
              icon: 'img/cabin.png'
            },
            {
              title:'BUFFALO',
              text:'The Gers is an area in south-west France, located in modern-day Gascony. It’s the most rural department in the whole of France, and is often referred to as French Tuscany due to its beautiful rolling hills and strong focus on food, wine and agriculture. ',
              icon: 'img/buffalo.png'
            }
          ]
        },
        {
          section: 'ACCOMMODATION',
          content:
            [
              {
                title: 'hotel options'.toUpperCase(),
                text: 'The chateau has enough beds to sleep up to 60 people, although some guests will have to share rooms with other guests. When you RSVP, you’ll be asked to specify your accommodation preferences so we can assign you a room accordingly. For those interested, we also have the option of creating a campsite in the chateau grounds, which, with the area being so remote, are perfect for stargazing. ',
                icon: 'img/hotel.png'
              },
              {
                title: 'The Best Western'.toUpperCase(),
                text: ' If you’d prefer to stay locally, we can help you organise accommodation and arrange transport to and from the venue. Here are a few of our recommendations:',
                icon: 'img/3star-hotel.png'
              },
              {
                title: 'The Lenox Hotel'.toUpperCase(),
                text: ' If you’d prefer to stay locally, we can help you organise accommodation and arrange transport to and from the venue. Here are a few of our recommendations:',
                icon: 'img/2star-hotel.png'
              }
            ]
        },
        {
          section: 'THINGS TO DO',
          content:
            [
              {
                title: 'Buffalo Botanical Gardens'.toUpperCase(),
                text: 'The chateau has enough beds to sleep up to 60 people, although some guests will have to share rooms with other guests. When you RSVP, you’ll be asked to specify your accommodation preferences so we can assign you a room accordingly. For those interested, we also have the option of creating a campsite in the chateau grounds, which, with the area being so remote, are perfect for stargazing. ',
                icon: 'img/plant.png'
              },
              {
                title: 'The Martin House'.toUpperCase(),
                text: ' If you’d prefer to stay locally, we can help you organise accommodation and arrange transport to and from the venue. Here are a few of our recommendations:',
                icon: 'img/museum.png'
              },
              {
                title: 'Niagara Falls'.toUpperCase(),
                text: ' If you’d prefer to stay locally, we can help you organise accommodation and arrange transport to and from the venue. Here are a few of our recommendations:',
                icon: 'img/waterfall.png'
              }
            ]
        },
        {
          section: 'THE CELEBRATION',
          content:
            [
              {
                title: 'The main event'.toUpperCase(),
                text: 'The chateau has enough beds to sleep up to 60 people, although some guests will have to share rooms with other guests. When you RSVP, you’ll be asked to specify your accommodation preferences so we can assign you a room accordingly. For those interested, we also have the option of creating a campsite in the chateau grounds, which, with the area being so remote, are perfect for stargazing. ',
                icon: 'img/chicken-wing.png'
              },
              {
                title: 'Timeline'.toUpperCase(),
                text: ' If you’d prefer to stay locally, we can help you organise accommodation and arrange transport to and from the venue. Here are a few of our recommendations:',
                icon: 'img/timeline.png'
              }
            ]
        },{
          section: 'NIAGARA',
          content:
            [
              {
                title: 'Family Trip: The Falls'.toUpperCase(),
                text: 'The chateau has enough beds to sleep up to 60 people, although some guests will have to share rooms with other guests. When you RSVP, you’ll be asked to specify your accommodation preferences so we can assign you a room accordingly. For those interested, we also have the option of creating a campsite in the chateau grounds, which, with the area being so remote, are perfect for stargazing. ',
                icon: 'img/group.png'
              },
              {
                title: 'Niagara-on-the-lake: Whisky, Wine & Goats'.toUpperCase(),
                text: ' If you’d prefer to stay locally, we can help you organise accommodation and arrange transport to and from the venue. Here are a few of our recommendations:',
                icon: 'img/whiskey.png'
              },
              {
                title: 'dinner'.toUpperCase(),
                text: ' If you’d prefer to stay locally, we can help you organise accommodation and arrange transport to and from the venue. Here are a few of our recommendations:',
                icon: 'img/plate.png'
              }
            ]
        },
        {section: 'INFORMATION',
          content:
            [
              {
                title: "FRENCH CULTURE",
                text: "In France, the role of the waiter is viewed as one of a facilitator, rather than a constant presence. They are there to help and answer questions, but they don't hover and they don't feel the need to check in constantly. French diners are expected to be more self-sufficient and to be able to flag down a waiter if they need something. Tipping culture in France is generally more modest than in the US. Service is often included in prices, and 5-10% tip is considered sufficient for good service. In restaurants and cafes, rounding up the bill or leaving small change is common. Things will usually be closed on Sundays, Mondays and at lunchtime In French restaurants, it is common to offer set menus, also known as \"menu du jour\" or \"menu fixe\". These are pre-set meals that typically include a starter, main course and dessert, and sometimes also include a glass of wine or aperitif. The set menu is usually a good value and offers a variety of dishes to choose from at a fixed price, it is also a good way to try different dishes from the restaurant's menu.",
                icon: "img/croissant.png"
              },{
                title: "CAR RENTALS",
                text: "In France, the role of the waiter is viewed as one of a facilitator, rather than a constant presence. They are there to help and answer questions, but they don't hover and they don't feel the need to check in constantly. French diners are expected to be more self-sufficient and to be able to flag down a waiter if they need something. Tipping culture in France is generally more modest than in the US. Service is often included in prices, and 5-10% tip is considered sufficient for good service. In restaurants and cafes, rounding up the bill or leaving small change is common. Things will usually be closed on Sundays, Mondays and at lunchtime In French restaurants, it is common to offer set menus, also known as \"menu du jour\" or \"menu fixe\". These are pre-set meals that typically include a starter, main course and dessert, and sometimes also include a glass of wine or aperitif. The set menu is usually a good value and offers a variety of dishes to choose from at a fixed price, it is also a good way to try different dishes from the restaurant's menu.",
                icon: "img/car.png"
              },{
                title: "ONWARDS TRAVEL",
                text: "In France, the role of the waiter is viewed as one of a facilitator, rather than a constant presence. They are there to help and answer questions, but they don't hover and they don't feel the need to check in constantly. French diners are expected to be more self-sufficient and to be able to flag down a waiter if they need something. Tipping culture in France is generally more modest than in the US. Service is often included in prices, and 5-10% tip is considered sufficient for good service. In restaurants and cafes, rounding up the bill or leaving small change is common. Things will usually be closed on Sundays, Mondays and at lunchtime In French restaurants, it is common to offer set menus, also known as \"menu du jour\" or \"menu fixe\". These are pre-set meals that typically include a starter, main course and dessert, and sometimes also include a glass of wine or aperitif. The set menu is usually a good value and offers a variety of dishes to choose from at a fixed price, it is also a good way to try different dishes from the restaurant's menu.",
                icon: "img/luggage.png"
              },
            ]
        }
      ];



$scope.getContent = function(event,section)
    {
       switch (event)
       {
         case 'fr':
           return _.find($scope.detailsFr,{section});
         case 'ny':
           return _.find($scope.detailsNy,{section});
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
        $scope.tableOfContents.ny.splice(3,0,"Niagara")
      }
      $timeout(function()
      {
        $scope.ny = document.querySelector('#ny');
        $scope.fr = document.querySelector('#fr');
        $scope.mtl = document.querySelector('#mtl');
        $scope.navbar = document.querySelector('#navbar');
        $scope.rsvp = document.querySelector('#rsvp');
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
      if($scope.selectedEvent === "ny")
      {
        $scope.rsvp.classList.remove("ny-text-secondary")

      }else
      {
        $scope.rsvp.classList.remove("fr-text-secondary")
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
          $scope.rsvp.classList.add("ny-text-secondary")
          break;
        case 'fr':
          $scope.fr.classList.add("main-container-expanded")
          $scope.ny.classList.add("main-container-shrunk")
          $scope.rsvp.classList.add("fr-text-secondary")
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
          selectedEvent: "=",
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

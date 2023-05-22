(function(window) {
  var testApp = angular.module( 'myApp', ['ngAnimate','ui.bootstrap'] );
  testApp.controller( 'MainCtrl', function( $scope,  $timeout,$modal,)
  {
    $scope.guestList =
      [
        {name:"Elliot2",pw:"2",invites:["ny"]},
        {name:"Elliot1",pw:"1",invites:["fr"]},
        {name:"Elliot3",pw:"3",invites:["fr","ny"]},
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
              text:'Our venue is Château Lacoste, a quirky and untraditional 18th century chateau located just outside the medieval village of Lupiac in south-west France. The chateau looks over Lupiac lake, which is just a few minutes walk down the hill, as well as views of the Pyrenees mountains to the south. Guests will be able to relax on the beach at the lake, hang out with the chateau farm animals, and enjoy the festivities to the fullest.',
              icon: 'img/castle.png'
            },
            {
              title:'ABOUT THE GERS',
              text:'The Gers is an area in south-west France, located in modern-day Gascony. It’s the most rural department in the whole of France, and is often referred to as French Tuscany due to its beautiful rolling hills, fortified villages, and strong focus on food, wine and agriculture. You could even go so far as to call Gersois wines healthy, as the properties in them supposedly contribute to the area’s life expectancy being the highest in France!',
              icon: 'img/fleurdelis.png'
            },
            {
              title:'ABOUT LUPIAC',
              text:'Lupiac is a pretty medieval village originally founded in 1090, and is a short walk from Château Lacoste. It’s most famous for being the birthplace and childhood home of Charles de Batz Castelmore (otherwise known as D’Artagnan) who was born in Lupiac in 1613 and was the inspiration behind his namesake’s character in Alexandre Dumas’ ‘The Three Musketeers’. You can find a statue commemorating D’Artagnan in Lupiac itself, or drive 40 minutes to Condom (yes, there is a local town called Condom) to see the iconic statue of D’Artagnan with the other three musketeers. The village itself is fairly tiny, but, being French, it does have a couple of bars and bakeries!',
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
                text: 'The chateau has enough beds to sleep up to 60 people, although some guests will need to share rooms (shared rooms have reduced rates). When you RSVP, you’ll be asked to specify your accommodation preferences so we can assign you a room accordingly. All rooms have ensuite bathrooms, and towels are provided. A continental breakfast with fresh pastries will also be served in the dining room each morning.\n' +
                  '\n' +
                  '\n' +
                  'The rate for each room is 150€ per night, which will be divided between guests sharing rooms.\n' +
                  '\n' +
                  'For those interested, we additionally have the option of creating a campsite in the chateau grounds, which, with the area being so remote, are perfect for stargazing. The view of the Milky Way is especially incredible in the Gers, and this time of year is also the peak of the Perseids meteor shower! \n',
                icon: 'img/heart-key.png'
              },
              {
                title: 'Nearby accommodation'.toUpperCase(),
                text: ' If you’d prefer to stay locally, we can help you organise accommodation and  transportation to and from the venue.',
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
                text: 'The Gers is renowned for being a foodie paradise. Don’t miss trying local Gascon wines, duck (which you’ll find on every menu) and armagnac.',
                icon: 'img/cutlery.png'
              },
              {
                title: 'Restaurants & markets'.toUpperCase(),
                text: 'Our recommendations:\n' +
                  '\n' +
                  'Citrus - Condom\n' +
                  'La Falène Bleue - Lannepax \n' +
                  'Racine - Lectoure\n' +
                  '\n' +
                  'Bars and restaurants in France usually have a ‘Menu du Jour’, which is a set menu. These are usually quite rustic, but good value, tasty and made with local ingredients. They can include one to four courses (sometimes with wine and/or coffee included) for as little as 14 euros! \n',
                icon: 'img/duck.png'
              },
              {
                title: 'Lakes and water parks'.toUpperCase(),
                text: 'As well as the lake right on your doorstep in Lupiac, there are several other swimming lakes nearby. Half an hour away in Castéra-Verduzan is a large lake with a beach, inflatable obstacle course, waterslides, kayak rentals, and a snack bar. Also 30 minutes away is a small waterpark in Gondrin.',
                icon: 'img/wave.png'
              },
              {
                title: 'Wine & armagnac tasting'.toUpperCase(),
                text: 'Gascony is the home of armagnac, so there are plenty of chateaux and distilleries in the area for you to have tastings. One of the best distilleries in the region, Armagnac Delord Frères, is just a 20-minute drive from Lupiac, in the pretty medieval town of Lannepax. We can organise a tasting here for anyone interested!',
                icon: 'img/winetasting.png'
              },
              {
                title: 'Nearby towns, medieval villages, historical sites'.toUpperCase(),
                text: 'There are many beautiful towns and villages in the Gers, several of which have been named some of the most beautiful in France. \n' +
                  '\n' +
                  'Larressingle is a UNESCO listed fortified village that was officially named one of the most beautiful villages in France. \n' +
                  '\n' +
                  'Another famously beautiful village is Montréal-du-Gers. 5 minutes away is Séviac, the site of an excavated Roman villa that’s open to the public. The mosaics here are especially impressive!  '+
                'There is also the possibility of taking a day trip to: \n' + 'Carcassonne\n' +
                  'Toulouse\n' +
                  'Bordeaux\n' +
                  'Cap Ferrat\n' +
                  'St Emilion\n' +
                  'Pyrenees\n' +
                  'Biarritz\n' +
                  'San Sebastian\n',

                icon: 'img/map-point.png'
              },

            ]
        },
        {
          section: 'THE CELEBRATION',
          content:
            [
              {
                title: 'Day 1: The main event'.toUpperCase(),
                text: 'We didn’t want to have a traditional wedding, so it made no sense to follow a traditional timeline. We want our guests to be having fun from the moment they arrive, so we won’t make you wait until after the ceremony for food and drinks to be served! Instead, we’ll be handing out wine and welcome shots, along with something sweet, Emily’s favourite food group (French patisseries galore), and something savory to make Elliot happy. This is also your chance to start a ping pong tournament, embrace your inner Frenchman with some pétanque, and get to know the other guests. This might come in handy for…',
                icon: 'img/party.png'
              },
              {
                title: 'Battle of the Guests'.toUpperCase(),
                text: 'From challenges to trivia, work together and compete against one another for points and prizes!',
                icon: 'img/battle.png'
              },
              {
                title: 'The Ceremony'.toUpperCase(),
                text: 'Our very special guests, Reverend Michael Alabama Jackson and Sister Mary-Lou from award-winning act Oh My God! It’s The Church has taken time out of their hectic summer schedule to lead our wedding ceremony. Unlike anything you’ve seen before.',
                icon: 'img/confetti.png'
              },
              {
                title: 'Day 2: Beach day'.toUpperCase(),
                text: 'After breakfast, we’ll head down to the lake for a beach day. Don’t forget your beach towels! If beaches and swimming aren’t your thing, there are plenty of other activities on offer at the lake, such as hiking, canoeing and paddle boarding (these can be rented on-site). There’s also a bar/restaurant with great music, cocktails, and snacks. If you let us know in advance, we can also help you organise other activities such as horse riding, wine and armagnac tasting, visiting local historical sites, day trips, etc. \n' +
                  '\n' +
                  'In the evening, come back to the chateau for a farewell barbecue.\n',
                icon: 'img/bikini.png'
              }
            ]
        },
        {section: 'INFORMATION',
          content:
            [
              {
                title: "FRENCH CULTURE",
                text: "In France, waiters are viewed as being facilitators rather than a constant presence. They’re there to help and answer questions, but they don't hover or feel the need to check in constantly. Diners are expected to be more self-sufficient and able to flag down a waiter if they need something.\n" +
                  "Tipping culture in France is much less of a big deal than in the US. Service is often included in prices, and 5-10% tip is considered sufficient for good service. In restaurants and cafes, rounding up the bill or leaving small change is common.\n" +
                  "Shops are usually closed on Sundays and Mondays, and some also close over lunchtime (generally between 12 and 2 daily, although this is becoming less common).\n",
                icon: "img/croissant.png"
              },{
                title: "CAR RENTALS",
                text: "For anyone traveling from North America and planning on hiring a car, it’s important to specify that you need an automatic car instead of a manual one, which is standard in Europe. Even if you know how to drive a manual, your license won’t be valid to drive them in Europe! \n" +
                "\n" +
                "Don’t forget to apply for an international driver’s license before you arrive in Europe (this can easily be done at your local AAA).\n",
                icon: "img/car.png"
              },{
                title: "ONWARDS TRAVEL",
              text: "If you’re planning to travel to other parts of France or Europe, Lupiac is conveniently located between three international airports (Toulouse, Bordeaux and Tarbes). Train travel is also relatively easy and inexpensive, and there are stations at Auch and Agen. From Agen, you can take the high-speed train (TGV) to Paris in 3 hours, often for as little as 10 euros! \n" +
                "\n" +
                "Drive time:\n" +
                "~ 1.5h: Lourdes, the Pyrenees, Toulouse\n" +
                "~ 2h: Spain, Bordeaux\n" +
                "~ 3h: San Sebastian, Cap Ferret\n" +
                "~ 4h: Montpellier\n" +
                "~ 8.5h: Paris\n",
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
              text: "Our celebration will be held at the Commissioner’s Cabin in Chestnut Ridge Park, about 20 miles south of Buffalo. Elliot has a special connection to the park, as his grandfather supplied many of the trees from the family nursery business, Schichtel’s Nursery. The cabin itself is in a secluded woodland section of the park, which is especially beautiful in the fall; for anyone wanting to explore, there’s a lake just outside the cabin with a short hiking trail around the perimeter. Parking will be available on site, and we’ll also arrange transport between the venue and the hotel.",
              icon: 'img/cabin.png'
            },
            {
              title:'BUFFALO',
              text:"Buffalo is the second biggest city in New York state (no prizes for guessing the first), and is known as an iconic destination for fans of architecture due to its historical importance as a trading hub along the Erie Canal. These days, it has almost 50 craft breweries, a great restaurant scene, and, on top of being known as the birthplace of Buffalo wings, is famous for its pizza and ‘beef on weck’ sandwiches.",
              icon: 'img/buffalo.png'
            },
            {
              title:'DRESS CODE',
              text:"Smart-casual, or whatever makes you feel fabulous (bonus points for colour, sequins or cowboy boots).",
              icon: 'img/cowboy.png'
            }
          ]
        },
        {
          section: 'WHERE TO STAY',
          content:
            [
              {
                title: 'planning your stay'.toUpperCase(),
                text: 'For your stay over the wedding weekend, we’ve arranged a group rate at The Best Western, which is a short walk from the roller disco and the bar crawl route we have planned. We’ll also be arranging transport from there to the cabin at Chestnut Ridge.',
                icon: 'img/hotel.png'
              },
              {
                title: 'The Best Western'.toUpperCase(),
                text: '$189 per night on Friday and Saturday, $129 for Sunday Night (includes breakfast). When booking, call the hotel and ask for the Scott-O’Reilly wedding to get the discounted rate: +1 716-886-8333',
                icon: 'img/3star-hotel.png'
              }
            ]
        },
        {
          section: 'THINGS TO DO',
          content:
            [
              {
                title: 'Buffalo Botanical Gardens'.toUpperCase(),
                text: 'The Buffalo Botanical Gardens has a beautiful and diverse collection of plants and flowers. Elliot\'s dad is the former head horticulturist, and spent many years cultivating the gardens.',
                icon: 'img/plant.png'
              },
              {
                title: 'The Martin House'.toUpperCase(),
                text: 'The Martin House was designed by the famous American architect Frank Lloyd Wright, and is considered to be one of his most important early works. The house is open to the public if you book a tour.',
                icon: 'img/museum.png'
              },
              {
                title: 'Niagara Falls'.toUpperCase(),
                text: 'One of the best things about Buffalo is its proximity to Niagara Falls, which you can get to in about 25 minutes. For the best experience, we recommend riding on the Maid of the Mist and doing the Journey Behind the Falls to get a view from up close. Be warned, you get very wet! For another great view of the Falls, cross Rainbow Bridge to the Canadian side (this is a country border, so don’t forget your passport!). The Canadian Niagara region is renowned for its wine production and tastings, particularly ice wine, and is just over the border from Buffalo.',
                icon: 'img/waterfall.png'
              }
            ]
        },
        {
          section: 'THE PARTY',
          content:
            [
              {
                title: 'The main event'.toUpperCase(),
                text: 'We’d love for you to join us at a fun and relaxed gathering to celebrate our wedding. This is where we’ll exchange our rings and where our families will meet for the first time. It’ll also be Emily’s parents’ first time in the US! We embrace the weird and wonderful, so expect an informal event with laid-back food, craft beer, and pickleback shots. Doing something more relaxed feels a lot more ‘us’ than a formal sit-down meal - we just want everyone to have fun! Emily also has a sweet tooth that was once described as “alarming”, so it was essential for us to have baked goods on hand all day, and we’ll have traditional cider mill fare such as apple cider doughnuts and pies to make the most of the season.', 
                icon: 'img/chicken-wing.png'
              },
              {
                title: 'Timeline'.toUpperCase(),
                text: '<b>1:00pm:</b> Arrival of guests and live music by Elliot’s sister Natalie. Grab a drink, grab a snack, have a sing-a-long.\n' +
                  '\n' +
                  '<b>1:40pm:</b> Exchanging of rings.\n' +
                  '\n' +
                  '<b>2:00pm:</b> Live music and games.\n' +
                  '\n' +
                  '<b>2:30pm:</b> Food - We’re going all-out Buffalo with pizza, wings and pierogies.\n' +
                  '\n' +
                  '<b>3:00pm:</b> Emily & Elliot’s Official Wing Eating Contest - what started as a joke, but is now all too real.\n' +
                  '\n' +
                  '<b>3:30pm:</b> Speeches - We’re playing with fire here by welcoming anyone to grab the mic and be as out of the box as you’d like. Traditional speeches are welcomed, but karaoke, impromptu performances and hidden talents are also strongly encouraged. \n' +
                  '\n' +
                  '<b>4:00pm:</b> Cutting the cake.\n' +
                  '\n' +
                  '<b>6:00pm:</b> Shuttle back to Buffalo. \n' +
                  '\n' +
                  '<b>8:00pm:</b> Roller disco at Buffalo Canalside - Skates will be provided and you’re welcome to change into something more comfortable beforehand. The skating rink is outside, so we recommend bringing a couple of warmer layers! \n' +
                  '\n' +
                  '<b>10:00pm:</b> Begin the Buffalo Bar Crawl. \n',
                icon: 'img/timeline.png'
              }
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
      loginGuest($scope.guestList[0])
      // if(sessionStorage.getItem("guest"))
      // {
      //   loginGuest(_.find($scope.guestList,{name:sessionStorage.getItem("guest")}))
      // }
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
        $scope.rsvp.classList.remove("ny-text-accent")

      }else
      {
        $scope.rsvp.classList.remove("fr-text-accent")
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
          $scope.rsvp.classList.add("ny-text-accent")
          break;
        case 'fr':
          $scope.fr.classList.add("main-container-expanded")
          $scope.ny.classList.add("main-container-shrunk")
          $scope.rsvp.classList.add("fr-text-accent")
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
       
      }
    }).filter('newline', function($sce) {
    return function(text) {
      text = text.replace(/\n/g, '<br />');
      return $sce.trustAsHtml(text);
    }
  });;
})(window);

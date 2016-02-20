angular.module('bballApp', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('home', {
      abstract: true,
      url: '/home',
      templateUrl: 'app/home/home.html'
    })

    .state('home.group', {
      url: '/group',
      views: {
        "tab-group": {
          templateUrl: "app/home/group.html"
        }
      }
    })

    .state('home.mybracket', {
      url: '/mybracket',
      views: {
        "tab-mybracket": {
          templateUrl: 'app/home/mybracket.html'
        }
      }
    })

    // primary page for the rest of the app
    .state('app', {
      abstract: true,
      url: '/app',
      templateUrl: 'app/layout/menu-layout.html'
    })

    .state('app.teams', {
      url: '/teams',
      views: {
        'mainContent': {
          templateUrl: 'app/teams/teams.html'
        }
      }
    })

    .state('app.team-detail', {
      url: '/teams/:id',
      views: {
        'mainContent': {
          templateUrl: 'app/teams/team-detail.html'
        }
      }
    })

    .state('app.game', {
      url: '/game/:id',
      views: {
        'mainContent': {
          templateUrl: 'app/game/game.html'
        }
      }
    })

    .state('app.standings', {
      url: '/standings',
      views: {
        'mainContent': {
          templateUrl: 'app/standings/standings.html'
        }
      }
    })

    .state('app.locations', {
      url: '/locations',
      views: {
        'mainContent': {
          templateUrl: 'app/locations/locations.html'
        }
      }
    })

    .state('app.rules', {
      url: '/rules',
      views: {
        'mainContent': {
          templateUrl: 'app/rules/rules.html'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/teams');
});

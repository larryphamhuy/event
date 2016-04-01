angular.module('eventApp', [
  'firebase',
  'ngRoute',
  'ngMessages',
  'eventApp.reports',
  'eventApp.events',
  'eventApp.login',  
  /*'ngMockE2E',*/
  'HighlightDirective'
  ])
.constant('FBMSG', 'https://resplendent-fire-6992.firebaseio.com/events')
.filter ('customLowerCase', function () {

    return function (item) {

       return item.toLowerCase();
    }
}
   )

.config(['$routeProvider','$locationProvider',function($routeProvider, $locationProvider) {


  
  $routeProvider.when('/login', {
      templateUrl:'components/login/views/login.html',
      controller:'loginCtrl',
      controllerAs:'loginCtl'

     }),
  $routeProvider.when('/logout', {
      templateUrl:'components/login/views/login.html',
      controller:'loginCtrl',
      controllerAs:'loginCtl',
      resolve: {
        "logout": ["authFactory", function(authFactory) {
          authFactory.logout();
        }]
      }

     }),
  $routeProvider.when('/', {
      templateUrl:'components/home/views/home.html',
      resolve: {

          "currentAuth": ["authFactory", function(authFactory) {

            var auth = authFactory.auth();
            console.log(auth);
            return auth.$requireAuth();
          }]
      }

     }),
  $routeProvider.when('/reports', {
      templateUrl:'components/reports/views/report.html',
      controller: 'reportsCtrl',      
      resolve: {

          "currentAuth": ["authFactory", function(authFactory) {

            var auth = authFactory.auth();
            console.log(auth);
            return auth.$requireAuth();
          }]
      }

     })
    
  $routeProvider.when('/add-event', {
      templateUrl:'components/events/views/add-event.html',
      controller: 'formCtrl',
      controllerAs:'eventCtl',
      resolve: {

          "currentAuth": ["authFactory", function(authFactory) {

            var auth = authFactory.auth();
            console.log(auth);
            return auth.$requireAuth();
          }]
      }

     })
  .when('/event-list', {
      templateUrl:'components/events/views/event-list.html',
      controller: 'eventManagerCtrl',
      controllerAs:'managerCtl',
      resolve: {
             initialData: function(eventFactory) {

              return eventFactory.getAllEvents();
             },

          "currentAuth": ["authFactory", function(authFactory) {

            var auth = authFactory.auth();
            console.log(auth);
            return auth.$requireAuth();
          }]
      }

     })
     .otherwise({redirectTo:'/'});
       
       $locationProvider.html5Mode(false);

}])

.run(['$rootScope','$location', function($rootScope, $location) {

  $rootScope.$on('$routeChangeError', function (event, next, previous, error) {
    console.log(error);
    if (error = "AUTH_REQUIRED") {

      console.log("Error in Auth");
      $location.path("/login");
    }
  })
}])
;
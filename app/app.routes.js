app.config(['$routeProvider',function($routeProvider) {
$routeProvider
    // route for the home page
    .when('/', {
        templateUrl : 'app/components/home/landingPageView.html',
        controller  : 'landingPageController',
        
    })
    
    .otherwise({
        redirectTo: '/',
        
    });
     
}]);
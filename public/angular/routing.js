var app = angular.module('main',['ngRoute']);


app.config(function($routeProvider)
{
	$routeProvider
	   .when('/',
	   {
	   	 templateUrl : 'main.html'
	   })
	   .when('/contact',
	   {
	   	templateUrl : 'contact.html'
	   })

	   .when('/about',{
	   	 templateUrl : 'about.html'
	   })

	   .when('/doctor',{
	   	templateUrl : 'doctor.html'
	   })
      .when('/service',{
      	templateUrl : 'service.html'
      })
      .when('')
	   .when('')
	   .otherwise({
	   redirectTo: '/'
	   });
});

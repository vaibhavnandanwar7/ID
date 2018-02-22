(function() {
	'use strict'
		
	app.config(function($routeProvider) {
		$routeProvider.when("/", {
			templateUrl : "./app/home/home.html",
			//controller : "mainController"
		}).when("/aboutUs", {
			templateUrl : "./app/home/aboutUs.html",
			//controller : "searchResultsController"
		}).when("/contact", {
			templateUrl : "./app/home/contact.html",
			controller : "contactController"
		});
	});
	
	
})();

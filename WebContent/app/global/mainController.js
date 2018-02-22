
app.controller('mainController', function($scope, $location, $rootScope) {

	$scope.isChangeActive = false;
	$scope.activeMenu = 'Portfolio';
	
	/** To make element fade In-Out on scroll*/
	$(window).scroll(function(){
	    $(".home").css("opacity", 1 - $(window).scrollTop() / 100);
	  });
	/*$(window).scroll(function(){
        $("#hero-image").css("opacity", 1 - $(window).scrollTop() / ($('#hero-image').height() / 2));
    });*/
	
	/**Menu Button - Cross Button */
	$scope.myFunction = function () {
	    $scope.isChangeActive =!$scope.isChangeActive;
	};
	
	$scope.$on("$locationChangeSuccess",function handleLocationChangeSuccessEvent(event) {
				var currentLocation = $location.url();
				switch (currentLocation) {
	            case '/':
	            	$scope.activeMenu = 'Portfolio';
	                break;
	            case '/aboutUs':
	            	$scope.activeMenu = 'About';
	                break;
	            case '/contact':
	            	$scope.activeMenu = 'Contact';
	                break;
	        }
			});
});


app.controller('mainController', function($scope, $location, $rootScope) {

	console.log('mainController');
	$scope.isChangeActive = false;
	
	/** To make element fade In-Out on scroll*/
	$(window).scroll(function(){
	    $(".home").css("opacity", 1 - $(window).scrollTop() / 100);
	  });
	
	/*$(window).scroll(function(){
        $("#hero-image").css("opacity", 1 - $(window).scrollTop() / ($('#hero-image').height() / 2));
    });*/
	
	/** */
	$scope.myFunction = function () {
	    $scope.isChangeActive =!$scope.isChangeActive;
	}
});

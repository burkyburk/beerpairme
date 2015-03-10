angular.module('app.controllers', [])
.controller('homeCtrl', function($scope, $http) {

    	var gameCollection = [];
    	var sort = true;
        $scope.beers = [];
        $scope.searchParam = '';

    	$scope.searchSubmit=function(searchParam){
    		if(searchParam.length < 2) {
    			$scope.errorMsg = "Search requires 2 or more characters";
    		}
    		$http.get('http://api.brewerydb.com/v2/search?key=5e6ff5f6aa57d35101352aff2579b986&q='+searchParam+'&type=beer&withBreweries=y')
    			.success(function(response) {
                    $scope.beers = response.data;
                    console.log(response);
    				$scope.showTable = true;
                    console.log($scope.beers);
    			})
    			.error(function(err) {
    				console.log(err);
    			});
    		};

    })
.controller('newpairingsCtrl', function() {

})
.controller('beerdetailsCtrl', function() {

})

.controller('infoCtrl', function() {

});

angular.module('app.controllers', [])


.controller('homeCtrl', function($scope, $http) {


        $scope.beers = [];
        $scope.searchParam = '';
        $scope.beerdetails = [];
        $scope.beerId = '';



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


                $scope.beerdetailsView = function(beerId) {
                $http.get('http://api.brewerydb.com/v2/beer/'+beerId+'?key=5e6ff5f6aa57d35101352aff2579b986&withBreweries=y')
                    .success(function(response) {
                        $scope.beerdetails = response.data;
                        console.log(response);
                        console.log($scope.beerdetails);
                        console.log($scope.beerdetails.id);
                        console.log($scope.beerdetails.name);
                        console.log($scope.beerdetails.description);

                    })
                    .error(function(err) {
                        console.log(err);
                    });
            };





    })
.controller('newpairingsCtrl', function() {

})
.controller('beerdetailsCtrl', function($scope, $http) {



})
.controller('infoCtrl', function() {

});

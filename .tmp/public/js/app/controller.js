angular.module('app.controllers', [])


.controller('homeCtrl', function($scope, $http) {


        $scope.beers = [];
        $scope.searchParam = '';



    	$scope.searchSubmit=function(searchParam){
    		if(searchParam.length < 2) {
    			$scope.errorMsg = "Search requires 2 or more characters";
    		}
    		$http.get('/beer/search?query='+searchParam)
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
.controller('beerdetailsCtrl', function($scope, $http, $stateParams) {



              $scope.beerdetails = [];
     $http.get('/beer/beerdetails?query='+$stateParams.beerId)
          .success(function(response) {
             $scope.beerdetails = response.data;
             console.log(response);
             console.log($scope.beerdetails);
             console.log($scope.beerdetails.id);
             console.log($scope.beerdetails.description);

          })
          .error(function(err) {
             console.log(err);
          });

      console.log($stateParams);
      console.log($stateParams.beerId);


})
.controller('infoCtrl', function() {

});

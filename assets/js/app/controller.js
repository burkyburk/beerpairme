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
            $scope.beerstyle = '';

            function GetRecipe(style) {
                $http.get('/Recipe?style='+style)
                .success(function(response) {
                    $scope.beerstyle = response[0];
                    console.log(response);
                    console.log($scope.beerstyle.pairings);

                })
                .error(function(err)   {
                    console.log(err);
                });
            }
            function styleParse(beerstyle) {
                if ($scope.beerstyle.indexOf('Hefeweizen') !==-1)
                    GetRecipe('Hefeweizen');
            }



             $http.get('/beer/beerdetails?query='+$stateParams.beerId)
                .success(function(response) {
                    $scope.beerdetails = response.data;
                    $scope.beerstyle = $scope.beerdetails.style.name;
                    styleParse($scope.beerstyle);


          })
                .error(function(err) {
                    console.log(err);
          });


      console.log($stateParams.beerId);



})
.controller('infoCtrl', function() {

});

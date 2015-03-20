angular.module('app.controllers', ['ngTable'])


.controller('homeCtrl', function($scope, $http, $filter, ngTableParams) {


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

                    $scope.tableParams = new ngTableParams({
                        page: 1,            // show first page
                        count: 15,          // count per page
                        sorting: {
                            name: 'asc'     // initial sorting
                        },
                        counts:''
                    }, {
                        total: $scope.beers.length, // length of data
                        getData: function($defer, params) {
                            // use build-in angular filter
                            var orderedData = params.sorting() ?
                                                $filter('orderBy')($scope.beers, params.orderBy()) :
                                                $scope.beers;
                                                    console.log(params.orderBy());
                            $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
                        }
                    });

    			})
    			.error(function(err) {
    				console.log(err);
    			});
    		};



})
.controller('newpairingsCtrl', function($scope, $http) {

            $scope.newpairings = [];

            function NewPairings() {
                $http.get('/Recipe')
                .success(function(response) {
                    for(var i=0; i<response.length; i++){
                        response[i].createdAt = moment(response[i].createdAt).format('MMMM Do YYYY');
                    }
                    $scope.newpairings = response;
                    console.log(response);
                })
                .error(function(err)    {
                    console.log(err);
                });
            }
            NewPairings();
            moment().format('l');    // 3/18/2015


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
                else if ($scope.beerstyle.indexOf('India Pale Ale') !==-1)
                        GetRecipe('India Pale Ale');
                else if ($scope.beerstyle.indexOf('Stout') !==-1)
                        GetRecipe('Stout');
                else if ($scope.beerstyle.indexOf('Porter') !==-1)
                        GetRecipe('Porter');
                else if ($scope.beerstyle.indexOf('Pilsener') !==-1)
                        GetRecipe('Pilsner');
                else if ($scope.beerstyle.indexOf('Lager') !==-1)
                        GetRecipe('Lager');
                else if ($scope.beerstyle.indexOf('Bock') !==-1)
                        GetRecipe('Bock');
                else if ($scope.beerstyle.indexOf('Lambic') !==-1)
                        GetRecipe('Lambic');
            }




             $http.get('/beer/beerdetails?query='+$stateParams.beerId)
                .success(function(response) {
                    $scope.beerdetails = response.data;
                    $scope.beerstyle = $scope.beerdetails.style.name;
                    styleParse($scope.beerstyle);
                    console.log($scope.beerdetails);


          })
                .error(function(err) {
                    console.log(err);
          });


      console.log($stateParams.beerId);



})
.controller('infoCtrl', function() {
    
})

.controller('submitCtrl', function() {

});

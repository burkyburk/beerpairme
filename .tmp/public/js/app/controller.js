angular.module('app.controllers', ['ngTable'])


.controller('homeCtrl', function($scope, $http, $filter, ngTableParams) {


    $scope.beers = [];
    $scope.searchParam = '';



    $scope.searchSubmit = function(searchParam) {
        if (searchParam.length < 2) {
            $scope.errorMsg = "Search requires 2 or more characters";
        }
        $http.get('/beer/search?query=' + searchParam)
            .success(function(response) {
                $scope.beers = response.data;
                $scope.showTable = true;

                $scope.tableParams = new ngTableParams({
                    page: 1, // show first page
                    count: 50, // count per page
                    sorting: {
                        name: 'asc' // initial sorting
                    },
                    counts: ''
                }, {
                    total: $scope.beers.length, // length of data
                    getData: function($defer, params) {
                        // use build-in angular filter
                        var orderedData = params.sorting() ?
                            $filter('orderBy')($scope.beers, params.orderBy()) :
                            $scope.beers;
                        $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
                    }
                });

            })
            .error(function(err) {
                console.log(err);
            });
    };



})
    .controller('newpairingsCtrl', function($scope, $http, ngTableParams, $filter) {

        $scope.newpairings = [];

        function NewPairings() {
            $http.get('/Recipe?limit=1000')
                .success(function(response) {
                    for (var i = 0; i < response.length; i++) {
                        response[i].createdAt = moment(response[i].createdAt).format('l');
                    }
                    $scope.newpairings = response;
                    $scope.tableParams = new ngTableParams({
                        page: 1, // show first page
                        count: 40, // count per page
                        sorting: {
                            createdAt: 'desc'
                            // initial sorting
                        },
                        counts: ''
                    }, {
                        total: $scope.newpairings.length, // length of data
                        getData: function($defer, params) {
                            // use build-in angular filter
                            var orderedData = params.sorting() ?
                                $filter('orderBy')($scope.newpairings, params.orderBy()) :
                                $scope.newpairings;
                            $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
                        }
                    });


                })
                .error(function(err) {
                    console.log(err);
                });
        }
        NewPairings();
        moment().format('l'); // 3/18/2015


    })
    .controller('beerdetailsCtrl', function($scope, $http, $stateParams) {

        $scope.beerdetails = [];
        $scope.beerstyle = '';

        function GetRecipe(style) {
            $http.get('/Recipe?style=' + style)
                .success(function(response) {
                    $scope.beerstyle = response[0];

                })
                .error(function(err) {
                    console.log(err);
                });
        }

        function styleParse(beerstyle) {
            if ($scope.beerstyle.indexOf('Hefeweizen') !== -1)
                GetRecipe('Hefeweizen');
            else if ($scope.beerstyle.indexOf('India Pale Ale') !== -1)
                GetRecipe('India Pale Ale');
            else if ($scope.beerstyle.indexOf('Imperial Stout') !== -1)
                GetRecipe('Imperial Stout');
            else if ($scope.beerstyle.indexOf('Stout') !== -1)
                GetRecipe('Stout');
            else if ($scope.beerstyle.indexOf('Porter') !== -1)
                GetRecipe('Porter');
            else if ($scope.beerstyle.indexOf('Pilsener') !== -1)
                GetRecipe('Pilsner');
            else if ($scope.beerstyle.indexOf('Amber') !== -1)
                GetRecipe('Amber');
            else if ($scope.beerstyle.indexOf('Smoke') !== -1)
                GetRecipe('Smoke');
            else if ($scope.beerstyle.indexOf('Wheat') !== -1)
                GetRecipe('Wheat');
            else if ($scope.beerstyle.indexOf('Lager') !== -1)
                GetRecipe('Lager');
            else if ($scope.beerstyle.indexOf('Bock') !== -1)
                GetRecipe('Bock');
            else if ($scope.beerstyle.indexOf('Lambic') !== -1)
                GetRecipe('Lambic');
            else if ($scope.beerstyle.indexOf('Pale Ale') !== -1)
                GetRecipe('Pale Ale');
            else if ($scope.beerstyle.indexOf('Sour') !== -1)
                GetRecipe('Sour');
            else if ($scope.beerstyle.indexOf('Saison') !== -1)
                GetRecipe('Saison');
            else if ($scope.beerstyle.indexOf('Strong') !== -1)
                GetRecipe('Strong Ale');
            else if ($scope.beerstyle.indexOf('Barley Wine') !== -1)
                GetRecipe('Barley Wine');
            else if ($scope.beerstyle.indexOf('Fruit Beer') !== -1)
                GetRecipe('Fruit Beer');
            else if ($scope.beerstyle.indexOf('Tripel') !== -1)
                GetRecipe('Tripel');
            else if ($scope.beerstyle.indexOf('Dubbel') !== -1)
                GetRecipe('Dubbel');
            else if ($scope.beerstyle.indexOf('Blonde') !== -1)
                GetRecipe('Blonde');
            else if ($scope.beerstyle.indexOf('Doppelbock') !== -1)
                GetRecipe('Doppelbock');
            else if ($scope.beerstyle.indexOf('Red Ale') !== -1)
                GetRecipe('Red Ale');
            else if ($scope.beerstyle.indexOf('Schwarzbier') !== -1)
                GetRecipe('Schwarzbier');
            else if ($scope.beerstyle.indexOf('Bière de Garde') !== -1)
                GetRecipe('Biere De Garde');
            else if ($scope.beerstyle.indexOf('Quadrupel') !== -1)
                GetRecipe('Quadrupel');
            else if ($scope.beerstyle.indexOf('Herb') !== -1)
                GetRecipe('Herb');
            else if ($scope.beerstyle.indexOf('Pumpkin') !== -1)
                GetRecipe('Pumpkin');
            else if ($scope.beerstyle.indexOf('Helles') !== -1)
                GetRecipe('Helles');
            else if ($scope.beerstyle.indexOf('Dunkel') !== -1)
                GetRecipe('Dunkel');
            else if ($scope.beerstyle.indexOf('Old Ale') !== -1)
                GetRecipe('Old Ale');







        }




        $http.get('/beer/beerdetails?query=' + $stateParams.beerId)
            .success(function(response) {
                $scope.beerdetails = response.data;
                $scope.beerstyle = $scope.beerdetails.style.name;
                styleParse($scope.beerstyle);


            })
            .error(function(err) {
                console.log(err);
            });


    })
    .controller('infoCtrl', function() {

    })

.controller('submitCtrl', function($scope, $http) {
    $scope.submitSuccess = true;
    $scope.myStyle = '';
    $scope.myPairings = '';
    $scope.myUrl = '';

    $scope.$watch('myStyle', function() {
        if (angular.isUndefined($scope.myStyle) || $scope.myStyle === '') {
            $scope.class1 = 'errorClass';
        } else {
            $scope.class1 = 'none';
        }
    });
    $scope.$watch('myPairings', function() {
        if (angular.isUndefined($scope.myPairings) || $scope.myPairings === '') {
            $scope.class2 = 'errorClass';
        } else {
            $scope.class2 = 'none';

        }
    });
    $scope.$watch('myUrl', function() {
        if (angular.isUndefined($scope.myUrl) || $scope.myUrl === '') {
            $scope.class3 = 'errorClass';
        } else {
            if ($scope.myUrl.substring(0, 7) === 'http://') {
                $scope.class3 = 'none';
            } else {
                $scope.class3 = 'errorClass';
            }
        }
    });

    $scope.submit = function() {
        var submitPass = 0;

        var errorArray = [
            'Style cannot be left empty',
            'Pairing Info cannot be left empty',
            'Link cannot be left empty',
            'Link must start with http://',
        ];

        if (angular.isUndefined($scope.myStyle) || $scope.myStyle === '') {
            $scope.error1 = errorArray[0];
        } else {
            $scope.error1 = undefined;
            submitPass++;
        }
        if (angular.isUndefined($scope.myPairings) || $scope.myPairings === '') {
            $scope.error2 = errorArray[1];
        } else {
            $scope.error2 = '';
            submitPass++;
        }
        if (angular.isUndefined($scope.myUrl) || $scope.myUrl === '') {
            $scope.error3 = errorArray[3];
        } else {
            if ($scope.myUrl.substring(0, 7) === 'http://') {
                $scope.error3 = '';
                submitPass++;
            } else {
                $scope.error3 = errorArray[4];
            }
        }


        if (submitPass === 3) {
            $scope.submitSuccess = false;
        }
    };

    $scope.submitClick = function(myStyle, myPairings, myUrl) {
        $http.post(
            '/Recipe', {
                style: myStyle,
                pairings: myPairings,
                url: myUrl


            }
        );


    };

});
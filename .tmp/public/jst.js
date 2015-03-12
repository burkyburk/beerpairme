this["JST"] = this["JST"] || {};

this["JST"]["assets/templates/beerdetails.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h1>Name:</h1><h1 ng-bind="beerdetails.name">Name: </h1>\n<h1>Brewery:</h1><h1 ng-bind="beerdetails.breweries[0].name"></h1>\n<h1>Style:</h1><h1 ng-bind="beerdetails.style.name"></h1>\n<h1>ABV:</h1><h1 ng-bind="beerdetails.abv"></h1>\n<h1>Description</h1><h1 ng-bind="beerdetails.description"></h1>\n<h1>Organic?</h1><h1 ng-bind="beerdetails.isOrganic"></h1>\n<h1>Label</h1><img src="{{ beerdetails.labels.medium }}">\n';

}
return __p
};

this["JST"]["assets/templates/home.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section class="search" ng-controller="homeCtrl">\n  <form ng-submit="searchSubmit(searchParam)">\n    <div class="box">\n      <div class="container-1">\n        <input ng-model="searchParam" type="search" id="search" results=10 placeholder="Search for a beer..." />\n        <br>\n        <h4 ng-bind="errorMsg" class="errorMsg" Search requires two or more characters.</h4>\n      </div>\n    </div>\n  </form>\n  <table ng-show="showTable" class="search-table">\n    <thead>\n      <th> Name </th>\n      <th> Brewery </th>\n      <th>Style</th>\n      <th>ABV </th>\n    </thead>\n    <tbody>\n      <tr class="selected" ng-repeat="beer in beers"  ui-sref=\'beerdetails({beerId:beer.id})\'>\n        <td> {{ beer.name }} </td>\n        <td> {{ beer.breweries[0].name }}</td>\n        <td> {{ beer.style.name }}\n          <td> {{ beer.abv}} </td>\n    </tbody>\n  </table>\n\n\n</section>\n';

}
return __p
};

this["JST"]["assets/templates/info.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '';

}
return __p
};

this["JST"]["assets/templates/newpairings.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '';

}
return __p
};
this["JST"] = this["JST"] || {};

this["JST"]["assets/templates/beerdetails.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="beerdetails">\n      <div class="imagebox">\n          <img src="{{ beerdetails.labels.medium }}">\n      </div>\n      <!-- Start of the accordion -->\n      <div id="container">\n        <!-- Item 1 -->\n        <div class="accordion">\n          <label for="tm" class="accordionitem"><h2>Name <span class="arrow">&raquo;</span></h2></label>\n          <input type="checkbox" id="tm"/>\n          <p class="hiddentext" ng-bind="beerdetails.name"></p>\n        </div>\n\n        <!-- Item 2 -->\n        <div class="accordion">\n          <label for="tn" class="accordionitem"><h2>Brewery <span class="arrow">&raquo;</span></h2></label>\n          <input type="checkbox" id="tn"/>\n          <p class="hiddentext" ng-bind="beerdetails.breweries[0].name"></p>\n        </div>\n\n        <!-- Item 3 -->\n        <div class="accordion">\n          <label for="to" class="accordionitem"><h2>Style <span class="arrow">&raquo;</span></h2></label>\n          <input type="checkbox" id="to"/>\n          <p class="hiddentext"  ng-bind="beerdetails.style.name"></p>\n        </div>\n\n        <!-- Item 4 -->\n        <div class="accordion">\n          <label for="tp" class="accordionitem"><h2>ABV <span class="arrow">&raquo;</span></h2></label>\n          <input type="checkbox" id="tp"/>\n          <p class="hiddentext" ng-bind="beerdetails.abv"></p>\n        </div>\n\n        <!-- Item 5 -->\n        <div class="accordion">\n          <label for="tq" class="accordionitem"><h2>Description <span class="arrow">&raquo;</span></h2></label>\n          <input type="checkbox" id="tq"/>\n          <p class="hiddentext" ng-bind="beerdetails.description"></p>\n        </div>\n      </div>\n\n\n\n\n\n  </div>\n';

}
return __p
};

this["JST"]["assets/templates/home.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section class="search" ng-controller="homeCtrl">\n  <form ng-submit="searchSubmit(searchParam)">\n    <div class="box">\n      <div class="container-1">\n        <input ng-model="searchParam" type="search" id="search" results=10 placeholder="Search for any beer or brewery..." />\n        <br>\n        <h4 ng-bind="errorMsg" class="errorMsg" Search requires two or more characters.</h4>\n      </div>\n    </div>\n  </form>\n  <table ng-show="showTable" class="search-table">\n    <thead>\n      <th>Name</th>\n      <th>Brewery</th>\n      <th>Style</th>\n      <th>ABV</th>\n    </thead>\n    <tbody>\n      <tr class="selected" ng-repeat="beer in beers" ui-sref=\'beerdetails({beerId:beer.id})\'>\n        <td> {{ beer.name }} </td>\n        <td> {{ beer.breweries[0].name }}</td>\n        <td> {{ beer.style.name }}\n          <td> {{ beer.abv}} </td>\n    </tbody>\n  </table>\n</section>\n';

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
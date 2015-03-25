this["JST"] = this["JST"] || {};

this["JST"]["assets/templates/beerdetails.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="beerdetails">\n  <div class="detailsandimage">\n    <!-- Start of the accordion -->\n    <div class="container">\n      <!-- Item 1 -->\n      <div class="accordion">\n        <label class="accordionitem">\n          <h2 ng-bind="beerdetails.name">\n          </h2>\n        </label>\n      </div>\n      <!-- Item 2 -->\n      <div class="accordion">\n        <label class="accordionitem">\n          <h2 ng-bind="beerdetails.breweries[0].name">\n          </h2>\n        </label>\n      </div>\n      <!-- Item 3 -->\n      <div class="accordion">\n        <label class="accordionitem">\n          <h2 ng-bind="beerdetails.style.name">\n          </h2>\n        </label>\n      </div>\n      <!-- Item 4 -->\n      <div class="accordion">\n        <label class="accordionitem">\n          <h2> {{beerdetails.abv}} ABV\n          </h2>\n        </label>\n      </div>\n      <!-- Item 5 -->\n      <div class="accordion">\n        <label class="accordionitem">\n          <h2> {{beerdetails.ibu}} IBU\n          </h2>\n        </label>\n      </div>\n    </div>\n    <div class="imagebox">\n      <img src="{{ beerdetails.labels.medium }}">\n    </div>\n  </div>\n  <!-- Item 6 -->\n  <div class="infobox">\n      <h1>Beer Details</h1>\n    <label class="accordionitem">\n      <h2 id="item6" ng-bind="beerdetails.description" </h2>\n    </label>\n  </div>\n  <div class="pairingsbox">\n      <h1>Style Details</h1>\n    <div class="pairings">   {{beerstyle.pairings}}\n    </div>\n    <br>\n    <div class="recipelink">\n      <i class="icon ion-fork">&nbsp;</i>\n      <a ng-href="{{beerstyle.url}}" TARGET="_blank">Recommended Recipe(s)</a>\n      &nbsp;<i class="icon ion-knife"></i>\n    </div>\n  </div>\n</div>';

}
return __p
};

this["JST"]["assets/templates/home.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section class="search" ng-controller="homeCtrl">\n    <form ng-submit="searchSubmit(searchParam)">\n        <div class="box">\n            <div class="container-1">\n                <input ng-model="searchParam" type="search" id="search" results=20 placeholder="Search for any beer or brewery..." />\n                <br>\n                <h4 ng-bind="errorMsg" class="errorMsg" Search requires two or more characters.</h4>\n            </div>\n        </div>\n    </form>\n    <table ng-show="showTable" ng-table="tableParams" class="search-table" class="table">\n        <tr ng-repeat="beer in $data" ui-sref=\'beerdetails({beerId:beer.id})\'>\n            <td data-title="\'Name\'" sortable="\'name\'" >\n                {{beer.name}}\n            </td>\n            <td data-title="\'Brewery\'" sortable="\'breweries[0].name\'">\n                {{beer.breweries[0].name}}\n            </td>\n            <td data-title="\'Style\'" sortable="\'style.name\'">\n                {{beer.style.name}}\n            </td>\n            <td data-title="\'ABV\'" sortable="\'abv\'">\n                {{beer.abv}}\n            </td>\n        </tr>\n    </table>\n</section>\n<div id="bubbles">\n    <div class="bubble x1"></div>\n    <div class="bubble x2"></div>\n    <div class="bubble x3"></div>\n    <div class="bubble x5"></div>\n    <div class="bubble x6"></div>\n    <div class="bubble x7"></div>\n    <div class="bubble x8"></div>\n    <div class="bubble x10"></div>\n</div>';

}
return __p
};

this["JST"]["assets/templates/newpairings.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<table class="newtable" ng-table="tableParams">\n\t<tr class="selected" ng-repeat="pairing in $data">\n\t\t<td data-title="\'Style\'" sortable="\'style\'">\n\t\t{{ pairing.style }}</td>\n\t\t<td data-title="\'Pairing Info\'">{{ pairing.pairings }}</td>\n\t\t<td data-title="\'Links\'"><a ng-href="{{pairing.url}}">New Recipe(s)</a></td>\n\t\t<td data-title="\'Added\'" sortable="\'createdAt\'">\n\t\t{{ pairing.createdAt }}</td>\n\t</table>';

}
return __p
};

this["JST"]["assets/templates/submit.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="submitpage" ng-controller="submitCtrl">\n  <div class="formbody" ng-show="submitSuccess">\n    <h1>Add Pairing Information</h1>\n    <form ng-submit="submit()">\n      <h3>Style</h3>\n      <input type="text" ng-class="class1" ng-model="myStyle" placeholder="The style of beer">\n      <h4 ng-bind="error1"></h4>\n      <h3>Link</h3>\n      <input type="text" ng-class="class3" ng-model="myUrl" placeholder="A link to recipe(s)">\n      <h4 ng-bind="error3"></h4>\n      <h3>Pairing Info</h3>\n      <textarea type="text" ng-class="class2" ng-model="myPairings" placeholder="Recommended foods to pair with style"></textarea>\n      <h4 ng-bind="error2"></h4>\n      \n      <button ng-click="submitClick(myStyle, myPairings, myUrl)"> Submit</button>\n    </form>\n  </div>\n  <section class="success-page" ng-hide="submitSuccess">\n    <h1> Thanks for submitting! Cheers! </h1>\n  </section>\n</div>';

}
return __p
};
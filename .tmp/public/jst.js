this["JST"] = this["JST"] || {};

this["JST"]["assets/templates/beerdetails.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '';

}
return __p
};

this["JST"]["assets/templates/home.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section>\n    <div class="col2">\n    </div>\n  <div class="col8">\n      <h1>Add A Game</h1>\n<form ng-submit="searchSubmit(searchParam)">\n    <!-- <input ng-model="searchParam" type="search" name="s" results=5 placeholder="enter game"> -->\n    <div class="box">\n          <div class="container-1">\n             <input ng-model="searchParam" type="search" id="search" results=10 placeholder="Search for a game..." /><br>\n             <h4 ng-bind="errorMsg" class="errorMsg" Search requires two or more characters.</h4>\n          </div>\n    </div>\n</form>\n<table ng-show="showTable">\n\t<thead>\n\t\t<th ng-click="nameClick(\'toString() || _.text\')"> Beer </th>\n\t\t<th ng-click="yearClick(\'yearpublished\')">  </th>\n\t\t<th class="add-game-icon"> Add To Vault </th>\n\t</thead>\n\t<tbody>\n\t\t<tr class="selected" ng-repeat="game in displayList | limitTo:50">\n\t\t\t<td> {{ game.name.toString() || game.name._text }} </td>\n\t\t\t<td class="year-published"> {{ game.yearpublished }}</td>\n\t\t\t<td> <i ng-click="addItemToCollection(game.gameId, game.name)" class="fa fa-plus"></i> </td>\n\t</tbody>\n</table>\n</div>\n<div class="col2">\n</div>\n  </section>\n';

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
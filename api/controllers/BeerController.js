var request = require("request");
module.exports = {
	search: function(req, res){
        console.log(req.param("query"));
        request.get('http://api.brewerydb.com/v2/search?key=5e6ff5f6aa57d35101352aff2579b986&q='+req.param("query")+'&type=beer&withBreweries=y', function(error, response, body){
            console.log(error);
            console.log(response);
            if(error){
                res.status(500);
                res.end(error);
            }
            else {
                res.end(body);
            }
        });

    },
    beerdetails: function(req, res){
        console.log(req.param("query"));
        request.get('http://api.brewerydb.com/v2/beer/'+req.param("query")+'?key=5e6ff5f6aa57d35101352aff2579b986&withBreweries=y', function(error, response, body){
            console.log(error);
            console.log(response);
            if(error){
                res.status(500);
                res.end(error);
            }
            else {
                res.end(body);
            }
        });

    }
};

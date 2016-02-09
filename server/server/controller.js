var Dal = require('./dal');
var url = require('url');

class Controller {
	
    constructor() {
        this.dal = new Dal();
    }

    getAllEpisodes(request,response) {
        var statusCode = 200;
        if(this.dal.getMap().size == 0)
        {
            statusCode = 204;
            response.writeHead(statusCode, {"Content-Type" : "application/json","Access-Control-Allow-Origin": "*","Access-Control-Allow-Headers": "X-Requested-With"});

        } else {
            var jsonData = JSON.stringify([...this.dal.map]);
            response.writeHead(statusCode, {"Content-Type" : "application/json","Access-Control-Allow-Origin": "*","Access-Control-Allow-Headers": "*"});
            response.write(jsonData);     
        }
        response.end();
    }
    
    getEpisode(request, response) {
        
        var parsedUrl = url.parse(request.url, true);
        var queryAsObject = parsedUrl.query;
        var episode = this.dal.getEpisode(queryAsObject.id);
        
        if(episode != undefined) {
            response.writeHead(200,{"Content-Type" : "application/json","Access-Control-Allow-Origin": "*","Access-Control-Allow-Headers": "X-Requested-With"});
            response.write(JSON.stringify(episode));
            response.end();  
        }
        response.writeHead(404,{"content-type" : "application/json","Access-Control-Allow-Origin": "*","Access-Control-Allow-Headers": "X-Requested-With"});
        response.end();
    }

    addEpisode(request, response) {  
        var body = '';
        
        request.on('data', function(data){
            body += data;			
        });	
        
        var dal = this.dal;

        request.on('end', function() {
            var serie = JSON.parse(body);

            serie = dal.addEpisode(serie);
            response.writeHead(201, {"content-type" : "application/json","Access-Control-Allow-Origin": "*","Access-Control-Allow-Headers": "*"});
            response.write(JSON.stringify(serie));
            response.end();
        });	
        
        
    }
}
module.exports = Controller; 

var Router = require("./router");
var http = require("http");
var Controller = require('./controller');
function start(port){

	var controller = new Controller();
	var router = new Router();

	router.get('/',function(request,response) {
		controller.getAllEpisodes(request,response);
	});
        
        router.get('/episode',function(request,response) {
            controller.getEpisode(request,response);
        });
        
	router.post('/',function(request,response) {
		controller.addEpisode(request,response);
	});
        
	http.createServer(function(request,response) {
		router.handle(request,response);	
	}).listen(port);
	
	console.log("Serveur port :"+port);
}
exports.start = start;

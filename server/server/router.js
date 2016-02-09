var url = require('url');

class Router {

	constructor() {
		this.posts = new Map();
		this.gets = new Map();
	}
        
	get(path, callback) {
		this.gets.set(path,callback);
	}

	post(path, callback) {
		this.posts.set(path,callback);	
	}

	handle(request, response) {

		var pathname = url.parse(request.url).pathname;
		
		switch(request.method)
		{
			case 'GET':
				if (this.gets.has(pathname)){
					this.gets.get(pathname)(request,response);
				} else {
                                    response.writeHead(404, {"Content-Type" : "application/html"});
                                    response.write('<html><body>Erreur 404</body></html>');
                                    response.end();				
				}
				break;

			case 'POST':
				if(this.posts.has(pathname)){
					this.posts.get(pathname)(request,response);
				} else {
                                    response.writeHead(404, {"Content-Type" : "application/html"});
                                    response.write('<html><body>Erreur 404</body></html>');
                                    response.end();				
				}
				break;
			case 'OPTIONS':
					response.writeHead(200, {"Content-Type" : "application/json","Access-Control-Allow-Origin": "*","Access-Control-Allow-Headers": "*"});
					response.end();
				break;
			default:
                                    response.writeHead(405, {"Content-Type" : "application/html"});
                                    response.write('<html><body>Erreur 405</body></html>');
                                    response.end();
				break; 
		}
	}

}
module.exports = Router;

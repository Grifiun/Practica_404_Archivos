var http = require('http');
var host = '127.0.0.1';
var port = '4000';

var server = http.createServer(function(request, response){
    
    if(request.url == "/archivos/index"){
        response.writeHead(200, {'Content-Type' : 'text/html'});
        response.end('<h1>Hola, bienvenido al servidor NODE <h1>');

    }else{
        response.writeHead(404, {'Content-Type' : 'text/html'});
        response.end('<h1>ERROR 404 RECURSO NO DISPONIBLE <h1>');

    }
});

server.listen(port, host, function(){
    console.log('Server funcionando: ' + host + ':' + port);
});
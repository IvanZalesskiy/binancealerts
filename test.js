const http = require("http");
//Create a server object

const port = process.env.PORT || 5000;

http.createServer(function (req, res) {

    let url = req.url;

    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.write('<h1>Hello World! We\'re live on Azure!')
    res.end();

}).listen(port, function() {
    console.log('Server start at port 5000'); // Listens on port 3000
});

/* const http = require("http");
var fileSystem = require("fs");
const sistema = require('./src/tests/sistema.js');
var queryString = require('querystring');

const hostname = "127.0.0.1";
const port = 3000;
const entryPointHtml = "./inicio.html";

const server = http.createServer((req, res) => {
    
    fileSystem.readFile(entryPointHtml, function (error, fileContent) {
        if (error) {
            res.writeHead(500, {
                "Content-Type": "text/plain"
            });
            res.end("Error");
        } else {
            res.writeHead(200, {
                "Content-Type": "text/html"
            });
            res.write(fileContent);
            res.end();
        }
    });
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
}); */
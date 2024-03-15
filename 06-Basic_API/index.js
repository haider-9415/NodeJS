// import http
const http = require('http')

// impoert data for api from the  file 'api1.js'
const data1 = require('./data')

http.createServer((req, resp) => {
    // to responce API or to send data
    resp.writeHead(200, {'Content-Type' : 'application\json'});
    // data in API
    resp.write(JSON.stringify(data1));
    resp.end();
}).listen(5000)


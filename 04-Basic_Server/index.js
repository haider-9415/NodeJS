const http = require('http') // to handle request & response in node

function dataControl(req, resp) {
    resp.write('<h1>Hello, i am Haider </h1>')
    resp.end()
}

// to create server
http.createServer(dataControl).listen(4500) // 4500 is port no.


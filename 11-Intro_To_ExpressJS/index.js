/* to install express --> npm install express */

// to import it
const express = require('express')

// to make it executable
const app = express()

// Home Page
app.get('', (req, resp) => {
    console.log('data sent from browser: ' ,req.query);
    console.log('data sent from browser: ' ,req.query.name);
    resp.send('Hello, this is Home Page')
})

// About Page
app.get('/about', (req, resp) => {
    resp.send('Hello, this is About Page')
})

app.listen(5000)


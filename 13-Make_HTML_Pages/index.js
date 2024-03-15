/* to install express --> npm install express */

// to import it
const express = require('express')

// we use path module to add html pages in index.js file
const path = require('path')

// to make it executable
const app = express()

const publicPath = path.join(__dirname,'public')
console.log('publicPath --> ',publicPath);

// we can do this but we don't do like this we use get method
// app.use(express.static(publicPath))

// for home page
app.get('', (_, resp) => {
    resp.sendFile(`${publicPath}/index.html`)
})
// for about page
app.get('/about', (_, resp) => {
    resp.sendFile(`${publicPath}/about.html`)
})
// for help page
app.get('/help', (_, resp) => {
    resp.sendFile(`${publicPath}/help.html`)
})
// for 404 page, we use *
app.get('*', (_, resp) => {
    resp.sendFile(`${publicPath}/404_Page.html`)
})

app.listen(5000)


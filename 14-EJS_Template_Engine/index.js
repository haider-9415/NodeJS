/* to install express --> npm install express */

// to import it
const express = require('express')

// we use path module to add html pages in index.js file
const path = require('path')

// to make it executable
const app = express()

const publicPath = path.join(__dirname,'public')
console.log('publicPath --> ',publicPath);

// we have to tell the nodejs that we are using template engine
app.set('view engine', 'ejs')

// for home page
app.get('', (_, resp) => {
    resp.sendFile(`${publicPath}/index.html`)
})
// for Profile page
app.get('/profile', (_, resp) => {
    const user = {
        name : 'Haider',
        email : 'haider@test.com',
        contact : 1234561230,
        skills : ['python', 'C++', 'Web Development', 'Node']
    }
    resp.render('profile', {user})
})
// for login page
app.get('/login', (_, resp) => {
    resp.render('login')
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


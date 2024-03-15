/* to install express --> npm install express */
/*
    Middlewares are functions which are used with routs.
    When we have to change in request and response then we use them.

*/

// to import it
const express = require('express')

// to make it executable
const app = express()

// create middleware
const reqFilter = (req, resp, next) => {
    if(!req.query.age){
        resp.send('Please provide age')
    }
    if(req.query.age < 18){
        resp.send('You can not access this page')
    }
    else {
        next()
    }
}
app.use(reqFilter)


app.get('/', (req, resp) => {
    resp.send('Welcome to Home Page')
})

app.get('/users', (req, resp) => {
    resp.send('Welcome to Users Page')
})


app.listen(5000)


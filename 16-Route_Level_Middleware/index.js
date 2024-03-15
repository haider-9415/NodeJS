/* to install express --> npm install express */
/*
    Middlewares are functions which are used with routs.
    When we have to change in request and response then we use them.

*/

// to import express
const express = require('express')

// to make it executable
const app = express()

/* create middleware */
// const reqFilter = (req, resp, next) => {
//     if(!req.query.age){
//         resp.send('Please provide age')
//     }
//     if(req.query.age < 18){
//         resp.send('You can not access this page')
//     }
//     else {
//         next()
//     }
// }

/* to create application level middleware, we don't need to specify in any rout */
// app.use(reqFilter)

// to create route level middleware, specify that route with 'reqFilter'

app.get('/', (req, resp) => {
    resp.send('Welcome to Home Page')
})

app.get('/users', (req, resp) => {
    resp.send('Welcome to Users Page')
})



/* to use middleware from another file */
// import middleware file 
const middle_from_AF = require('./middleware')
const route = express.Router()
route.use(middle_from_AF)

route.get('/about', (req, resp) => {
    resp.send('Welcome to About Page')
})
route.get('/contact', (req, resp) => {
    resp.send('Welcome to Contact Page')
})
app.use('/', route)


app.listen(5000)


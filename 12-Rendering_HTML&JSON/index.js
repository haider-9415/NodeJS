/* to install express --> npm install express */

// to import it
const express = require('express')

// to make it executable
const app = express()

// Home Page
app.get('', (req, resp) => {
    resp.send(`<h1>Hello, this is Home Page</h1><br/>
               <a href="/about">Go To About Page</a><br/>
               <a href="/home">Go To Home Page</a><br/>
    `)
})

// About Page
app.get('/about', (req, resp) => {
    resp.send(`<h1>Hello, this is About Page</h1><br/>
        <input type="text" placeholder="User name"/>
        <button>Submit</button><br/><br/>
        <a href="">Go To Home Page</a><br/>
        <a href="/help">Go To Help Page</a><br/>
    `)

})

app.get('/help', (req, resp) => {
    resp.send([
        {
            name : 'Haider',
            email : 'haider@test.com',
            contact : 1234567890
        },
        {
            name : 'Tony',
            email : 'tony@test.com',
            contact : 1234569871
        },
        {
            name : 'Steve',
            email : 'steve@test.com',
            contact : 1233214567
        }
    ])
})

app.listen(5000)


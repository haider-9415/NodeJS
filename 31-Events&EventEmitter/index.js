const express = require('express')
const EventEmitter = require('events')
const app = express()
const event = new EventEmitter()

let count = 0
event.on('countAPI', () => {
    count++
    console.log('called api',count,'times');
})
app.get('/', (req, resp) => {
    resp.send('API called through home route')
    event.emit('countAPI')
})
app.get('/search', (req, resp) => {
    resp.send('API called through search route')
    event.emit('countAPI')
})
app.get('/update', (req, resp) => {
    resp.send('API called through update route')
    event.emit('countAPI')
})
app.listen(5000)


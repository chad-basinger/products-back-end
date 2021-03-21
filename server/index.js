
// require('massive')
const express = require('express')
require('dotenv').config()
const massive = require('massive');
const ctrl = require('./products_controllers')
const app = express()

const {SERVER_PORT, CONNECTION_STRING} = process.env;

app.use(express.json());

app.get('/api/products', ctrl.getAll)
app.get('/api/products/:id', ctrl.getOne)
app.put('/api/products/:id', ctrl.update)
app.post('/api/products', ctrl.create)
app.delete('/api/products/:id', ctrl.delete)

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then (dbInstance => {
    app.set('db', dbInstance)
}).catch(err => console.log(err))



app.listen(SERVER_PORT, () => console.log(`Server is smooching port ${SERVER_PORT}fm`))
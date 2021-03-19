const massive = require('massive');

require('massive')
require('express')
require('dotenv').config()

const app = express()

const {SERVER_PORT, CONNECTION_STRING} = process.env;

app.use(express.JSON())

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectionUnauthorized: false
    }
}).then (dbInstance => {
    app.set('db', dbInstance)
}).catch(err => console.log(err))


app.listen(SERVER_PORT, () => console.log(`Server is smooching port ${SERVER_PORT}fm`))
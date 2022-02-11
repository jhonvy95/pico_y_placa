const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser');
const dotenv = require('dotenv')
dotenv.config();

//create express app
const app = express();

//setup the server port
const port = process.env.PORT || 3030

require('./lib/mongoose')

//json
app.use(bodyParser.json());

// www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}))


//listen to the port
app.listen(port,() => {
    console.log(`server is running at ${port}`)
})

//routes
require('./src/routes')(app);

// Middlewares




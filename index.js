require('dotenv').config()

var express = require("express");
var app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

/*******
 *  activate the middleware/dependencies above on our server
 *      morgan: logger
 *      helmet: secure the response header
 *      cors: let the sites available to be accessed by external entity
 *      body-parser: to parse the x-form-urlencoded
 * 
 *******/
app.use(morgan(':method :url :status :res[content-length] - :response-time ms')) // let developer able to see what happens
app.use(helmet()); // securing express header so less vulnerable to security breach
app.use(cors({
    allowedHeaders: ['Content-Type', 'Authorization'],
    origin: '*',
    methods: '*',
    preflightContinue: false,
    optionsSuccessStatus: 204
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/', require('./routes'))

app.listen(process.env.PORT || 4000, function () {
    console.log(`Server is running on port ${this.address().port} in ${app.settings.env} mode`);
})
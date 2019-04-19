const express = require('express');
const bodyparser = require("body-parser");

//routes to include
var routes = require('./routes/routes');

const PORT = 8080;
const HOST = '0.0.0.0';

var app = express();
app.use(bodyparser.json());

app.use('/api/v1', routes);

//404 handler
app.use(function (req, res, next) {
    res.status(404).send("404: Resource not found")
});


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

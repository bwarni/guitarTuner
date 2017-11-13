var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');
var methodOverride = require('method-override');
var hostname = process.env.HOSTNAME || 'localhost';
var port = 8080;

var fs = require('fs');
var http = require('http');




function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

/*
In the event that the store is very busy with back orders, the process of ordering a  simple sample quart can take much longer than needed. During this event it can be very hard helping every customer in an efficient manner. Larger order’s tend to become the prioritized task for the moment resulting in “Sample Quart” customers not receiving the customer service expected.
*/

app.use(methodOverride());
app.use(bodyParser());
app.use(express.static(__dirname + '/public'));
app.use(errorHandler());

console.log("Simple static server listening at http://" + hostname + ":" + port);
app.listen(port);


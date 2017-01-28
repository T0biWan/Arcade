/**
 * Created by Tobi on 28.01.2017.
 */
"use strict";

var express = require('express');
var app = express();
var sitePath = process.argv[2];
var port = 3000;

// Request logging
app.use(function(req, res, next) {
    console.log(req.url);
    next();
});

// Start server
app.use(express.static(__dirname + '\\' + sitePath));
app.listen(port, function() {
    console.log("Server running at: http://localhost:" + port)
});
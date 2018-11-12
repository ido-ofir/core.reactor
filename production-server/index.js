var express = require('express');
var path = require('path');
var app = express();

// app.use(express.static(path.resolve(__dirname, '../www')))
app.use(express.static(path.resolve(__dirname, '../www')))

app.listen(80, function(err){
    if(err){ throw err; }
    console.log('running');
})
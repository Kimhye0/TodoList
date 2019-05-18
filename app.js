var express = require('express');
var http = require('http');
var path = require('path');
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var static = require('serve-static');
var methodOverride = require('method-override');

var app = express();
var port = process.env.PORT || 8080;

var dbUrl = 'mongodb://localhost:27017/myDB';
mongoose.connect(dbUrl);

app.use(morgan('dev'));
app.use(static(path.join(__dirname,'/public')));
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());
app.use(methodOverride());

require('./routers')(app);

app.get('/',(req,res)=>{
    res.sendfile('./public/index.html');
});

//Express Server Start
app.listen(port, function(){
    console.log("App listening on port : "+port);
});

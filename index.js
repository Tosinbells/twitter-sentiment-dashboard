var express = require('express');

var app = express();
app.listen(process.env.PORT || 3128, function(){
    console.log("Our APP is now live");
});

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(require('path').join(__dirname, 'public')));
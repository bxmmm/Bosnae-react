var express = require('express');
var mongoose = require('mongoose');
var Article = require('./models/article');
var Link = require('./models/link');
// var BAZA = require('./baza');

var app = express();



app.use('/', express.static(__dirname + '/'));

// set the view engine to ejs
app.set('view engine', 'ejs');

// Database connect
mongoose.connect(process.env.BAZA || BAZA);


app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Route for GET API request to show data
app.get('/api/articles', function(req, res, next){
	Article.find({}, function(err, foundArticles){
        if (err) {
            console.log(err);
     // render show template with them
        } else {
            res.json({articles: foundArticles.reverse()});
        }
    });
});
app.get('/api/images', function(req, res, next){
  Link.find({}, function(err, foundImages){
        if (err) {
            console.log(err);
     // render show template with them
        } else {
            res.json({images: foundImages.reverse()});
        }
    });
});


app.get('*', function (req, res){
  res.render('../index');
});


const PORT = process.env.PORT || 3000;

app.use(function (req, res, next){
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});



app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});
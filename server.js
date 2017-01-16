var express = require('express');
var mongoose = require('mongoose');
var Article = require('./models/article');

var app = express();

app.use('/', express.static(__dirname + '/'));


// Database connect
mongoose.connect(process.env.BAZA);


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
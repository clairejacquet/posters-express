var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000))
var router = require('./router');


var posters = require('./database/data.json');

var testPostersDocu = require('./database/data.json');
var testPosters = JSON.stringify(testPostersDocu) ;


app.use(express.static('assets'));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/app/views');

app.use(router);

app.listen(app.get('port'), function () {
  console.log('8080 is the magic port');
});

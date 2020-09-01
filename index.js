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

//The 404 Route (ALWAYS Keep this as the last route)
app.use(function (request, response) {
    response.status(404).send('error - url route does not exist');
});

app.listen(app.get('port'), function () {
  console.log('5000 is the magic port');
});

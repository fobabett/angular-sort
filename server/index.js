var express = require('express');
var app = express();
// var _ = require('lodash');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8080;

app.use(express.static('./build')); // angulpify's static <--- this is breaking and giving the unexpected syntax error B error..? or just not rendering
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, function(){
  process.stdout.write("[LOADED] Server listening at http://localhost:"+port+"\n\n");
});

module.exports = app;

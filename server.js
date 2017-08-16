var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');




app.use(express.static('./public'));

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ 
	limit: '50mb',
	extended: true, 
	parameterLimit:50000}));
app.use(bodyParser.text());
app.use(bodyParser.json());

app.get('/', (req,res) => {
	res.sendFile(path.join(__dirname, './public/index.html'));
});
app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
})



var PORT = process.env.PORT || 8000;

app.listen(PORT);

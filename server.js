const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.sendfile(__dirname + '/public/index.html');
});

app.use(express.static('./node_modules/bootstrap/dist'));


app.listen(PORT, () => {
	console.log('Success');
});

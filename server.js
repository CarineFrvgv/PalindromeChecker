const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const app = express();

// serving static files
app.use(express.static('public'));
// setting view engine
app.set('view engine', 'ejs');

// using bodyparser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/', (request, response) => {
    response.send('main route')
});

app.get('/palichecker', (request, response) => {
    response.send('palichecker route');
});

app.listen(8080, ()=> {
    console.log('app running on port 8080')
});
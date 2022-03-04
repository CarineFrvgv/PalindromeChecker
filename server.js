const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const ispalindrome = require('./index');
const app = express();

// serving static files
app.use(express.static('public'));
// setting view engine
app.set('view engine', 'ejs');

// using bodyparser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// routes
app.get('/', (request, response) => {

    response.render('index');
});

app.get('/palichecker', (request, response) => {
    let result = null;
    response.render('palichecker', {result});
});

app.post('/palichecker', (request, response) => {
    let sentence = request.body.sentence;
    let result = ispalindrome(sentence);

    response.render('palichecker', {result, sentence});
});

app.listen(8080, ()=> {
    console.log('app running on port 8080')
});
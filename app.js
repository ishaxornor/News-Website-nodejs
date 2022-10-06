//api key - a301107328144cfc9d3671820e914bbb

const express = require('express');
const bodyParser = require('body-parser');

const app =express()
const port =  5000;

// const API_KEY = "a301107328144cfc9d3671820e914bbb";
// const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=a301107328144cfc9d3671820e914bbb"

//static files
app.use(express.static('public'))
app.use('/css' , express.static(__dirname + 'public/css'));
app.use('/img' , express.static(__dirname + 'public/img'));
app.use('/js' , express.static(__dirname + 'public/js'));

app.set('views' , './src/views/partials');
app.set('view engine' ,'ejs');

app.use(bodyParser.urlencoded
    ({extended : true }))

//routes
const newsRouter = require('./src/routes/news')


app.use('/',newsRouter)
app.use('/article',newsRouter)

app.listen(port,() => {
    console.log(`Listening on port ${port}`);
})
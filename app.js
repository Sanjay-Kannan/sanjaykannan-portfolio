const path = require('path');
const request = require('request');
var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

const publicDirectory = path.join(__dirname, './public')

app.use(express.static(publicDirectory));

app.get('/', function (req, res) {
    res.sendFile(getHtml('index'));
});

app.get('/home', function (req, res) {
    res.sendFile(getHtml('index'));
});

app.get('/projects', function (req, res) {
    res.sendFile(getHtml('projects'));
});

app.get('/contact', function (req, res) {
    res.sendFile(getHtml('contacts'));
});


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

function getHtml(htmlName) {
    return path.join(__dirname, `./${htmlName}.html`);
}
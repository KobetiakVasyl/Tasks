const express = require('express');
const favicon = require('express-favicon');
const path = require('path');

const mongoose = require('mongoose');
const cors = require('cors');
const serveStatic = require('serve-static');

require('dotenv').config();

require('./models/Task');
require('./models/User');

mongoose.connect(`${process.env.DATABASE_URL}`, {useNewUrlParser: true});

const db = mongoose.connection;
db.once('open', () => console.log('Connected to the database'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const app = express();

app.use(cors());
app.use(favicon(__dirname + '/build/favicon.ico'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use(serveStatic(__dirname + '/build'));
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/build/index.html');
});

const apiRouter = require('./routes/apiRouter');
app.use('/api', apiRouter);

app.use("*", function (req, res) {
    res.redirect('/');
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, err => {
    err ? console.log(err) : console.log(`Listening ${PORT}`);
});
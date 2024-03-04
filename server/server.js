

const express = require('express');

const mongoose = require('mongoose');

const bodyParser = require('body-parser');
const dbUrl = require('./db').mongoUrl;

const app = express();

app.use(bodyParser.json());

mongoose.connect(dbUrl)
    .then(() => {
        console.log('connected mongodb')
    })
    .catch((error) => {
        console.log(error.message);
    });

app.use('/api/calendar', require('./controllers/calendar'))



app.listen(process.env.PORT || 5000, () => {
    console.log('server running')
})
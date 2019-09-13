const express = require('express');

const app = express();

app.use('/users', (req, res, next) => {
    res.send('<h1>Hi from users page</h1>');
})

app.use('/', (req, res, next) => {
    res.send('<h1>Hi from the homepage</h1>');
})

app.listen(3000);
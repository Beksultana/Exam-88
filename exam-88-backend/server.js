const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const cors = require('cors');

const categories = require('./app/categories');
const products = require('./app/products');
const users = require('./app/users');

const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use(cors());

const port = 8001;

mongoose.connect(config.dbUrl, config.mongoOptions).then(() => {

    app.use('/categories', categories);
    app.use('/products', products);
    app.use('/users', users);

    app.listen(port, () => {
        console.log(`Server started on ${port} port`);
    })
});
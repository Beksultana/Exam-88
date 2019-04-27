const express = require('express');
const Category = require('../models/Category');

const router = express.Router();

router.get('/', (req, res) => {
    Category.find()
        .then(result => res.send(result))
        .catch(() => res.sendStatus(500))
});



module.exports = router;
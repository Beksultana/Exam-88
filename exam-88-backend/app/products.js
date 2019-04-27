const express = require('express');
const multer = require('multer');
const path = require('path');
const nanoid = require('nanoid');
const config = require('../config');

const Product = require('../models/Products');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, config.uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, nanoid() + path.extname(file.originalname));
    }
});

const upload = multer({storage});

const router = express.Router();


router.get('/', (req, res) => {
    if (req.query.category){
        Product.find({category: req.query.category}).populate('category')
            .then(result => res.send(result))
            .catch(() => res.send(500))
    }else {
        Product.find().populate('category')
            .then(result => res.send(result))
            .catch(error => res.send(error))
    }
});

module.exports = router;
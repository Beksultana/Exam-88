const express = require('express');
const multer = require('multer');
const path = require('path');
const nanoid = require('nanoid');
const config = require('../config');
const auth = require('../middleware/auth');

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
    Product.find().populate('category').populate('user')
        .then(result => res.send(result))
        .catch(error => res.send(error))
});

router.get('/:id', (req, res) => {
    Product.find({_id: req.params.id}).populate('category').populate('user')
        .then(result => res.send(result))
        .catch(() => res.send(500))

});

router.post('/', auth, upload.single('image'), (req, res) => {
    const productData = req.body;

    if (req.file) {
        productData.image = req.file.filename;
    }

    const product = new Product(productData);

    product.save()
        .then(result => res.send(result))
        .catch(error => res.status(400).send(error));
});

module.exports = router;
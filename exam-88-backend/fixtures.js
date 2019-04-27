const mongoose = require('mongoose');
const config = require('./config');

const Category = require('./models/Category');
const Product = require('./models/Products');

const run = async () => {
    await mongoose.connect(config.dbUrl, config.mongoOptions);

    const connection = mongoose.connection;

    const collections = await connection.db.collections();

    for (let collection of collections) {
        await collection.drop();
    }

    const categories = await Category.create(
        {title: 'Computers', description: 'New computers'},
        {title: 'Cars', description: 'New cars'},
        {title: 'Phone', description: 'New phone'},
    );

    await Product.create(
        {
            title: 'Dell Latitude"',
            price: 50000,
            description: 'Dell Latitude E3450 14.0"',
            category: categories[0]._id,
            image: 'dell.jpg'
        },
        {
            title: 'Audi A6',
            price: 600000,
            description: 'Audi A6 (4F) 2004-2011',
            category: categories[1]._id,
            image: 'audiA6.jpg'
        },
        {
            title: 'Honda',
            price: 600000,
            description: 'Honda (4F) 2004-2011',
            category: categories[1]._id,
            image: 'honda.jpg'
        },
        {
            title: 'Samsung',
            price: 60000,
            description: 'Samsung A8+ 2016',
            category: categories[2]._id,
            image: 'samsung.jpg'
        },
        {
            title: 'Apple',
            price: 60000,
            description: 'Iphon 9',
            category: categories[2]._id,
            image: 'iphone9.jpg'
        }
    );

    await connection.close();
};

run().catch(error => {
    console.error('Something went wrong', error);
});

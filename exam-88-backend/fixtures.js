const mongoose = require('mongoose');
const config = require('./config');

const Category = require('./models/Category');
const Product = require('./models/Products');
const User = require('./models/User');

const run = async () => {
    await mongoose.connect(config.dbUrl, config.mongoOptions);

    const connection = mongoose.connection;

    const collections = await connection.db.collections();

    for (let collection of collections) {
        await collection.drop();
    }

    const user = await  User.create(
        {username: "sultan", password: "123", token: 1},
        {username: "Romeo", password: "123", token: 2},
    );

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
            image: 'dell.jpg',
            user: user[0]._id,
        },
        {
            title: 'Audi A6',
            price: 600000,
            description: 'Audi A6 (4F) 2004-2011',
            category: categories[1]._id,
            image: 'audiA6.jpg',
            user: user[1]._id,
        },
        {
            title: 'Honda',
            price: 600000,
            description: 'Honda (4F) 2004-2011',
            category: categories[1]._id,
            image: 'honda.jpg',
            user: user[0]._id,
        },
        {
            title: 'Samsung',
            price: 60000,
            description: 'Samsung A8+ 2016',
            category: categories[2]._id,
            image: 'samsung.jpg',
            user: user[0]._id,
        },
        {
            title: 'Apple',
            price: 60000,
            description: 'Iphon 9',
            category: categories[2]._id,
            image: 'iphone9.jpg',
            user: user[1]._id,
        }
    );

    await connection.close();
};

run().catch(error => {
    console.error('Something went wrong', error);
});

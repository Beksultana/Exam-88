const path = require('path');

const rootPath = __dirname;

module.exports = {
    rootPath,
    uploadPath: path.join(rootPath, 'public/uploads'),
    dbUrl: 'mongodb://localhost/shop',
    mongoOptions: {
        useCreateIndex: true,
        useNewUrlParser: true
    }
};
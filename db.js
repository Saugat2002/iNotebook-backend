const Mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/?directConnection=true&tls=false"
const connectToMongo = async () => {
    Mongoose.connect(mongoURI)
        .then(() => {
            console.log('Mongoose connected successfully.');
            // Any additional code to run after connection.
        })
        .catch((error) => {
            console.error('Mongoose connection error:', error);
        });
}

module.exports = connectToMongo;
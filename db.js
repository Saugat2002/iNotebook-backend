const Mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/?directConnection=true&tls=false"
const connectToMongo = async () => {
    Mongoose.connect(mongoURI)
    .then(() => {
        console.log("Connected to Mongo successfully");
    })
    .catch((e) => {
        console.log("Error while attempting to connect to Mongo");
        console.log(e);
    });
}

module.exports = connectToMongo;
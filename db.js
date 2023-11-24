const Mongoose = require('mongoose');  // Importing Mongoose
const mongoURI = "mongodb://localhost:27017/iNotebook?directConnection=true&tls=false"


const connectToMongo = async () => {
    //Function to connect to MongoDB
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
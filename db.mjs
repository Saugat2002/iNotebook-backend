import { connect } from 'mongoose';  // Importing Mongoose
const mongoURI = "mongodb://localhost:27017"


const connectToMongo = async () => {
    //Function to connect to MongoDB
    connect(mongoURI)
        .then(() => {
            console.log("Connected to Mongo successfully");
        })
        .catch((e) => {
            console.log("Error while attempting to connect to Mongo");
            console.log(e);
        });
}

export default connectToMongo;
//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/my_database';

const MONGO_USER = 'caffinityadmin'
// TODO: move to process.env
const MONGO_PW = 'caffinityadmin1'
var opt = {
    user: MONGO_USER,
    pass: MONGO_PW,
    auth: {
        authdb: process.env.MONGO ? 'admin' : 'caffinity'
    }
}

const MONGO_URL = process.env.MONGO || `mongodb://${MONGO_USER}:${MONGO_PW}mongodb://<dbuser>:<dbpassword>@ds163255.mlab.com:63255/caffinity`

//mongoose.connect(mongoDB, { useNewUrlParser: true });
exports.db = mongoose.connect(MONGO_URL, {
    ...opt,
    useNewUrlParser: true,
    keepAlive: 1, 
    connectTimeoutMS: 30000,
})
// Get Mongoose to use the global promise library
//mongoose.Promise = global.Promise;
//Get the default connection
//var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
//db.on('error', console.error.bind(console, 'MongoDB connection error:'));

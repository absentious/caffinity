/**
 * Mongoose schema for images, metadata, and associated analysis.
 * 
 * For maximal flexibility, analysis is any JSON object.
 * Images are stored as data URIs to avoid having to serialize and deserialize in the browser
 */

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const cafeModel = new Schema({
    name: { type: String },
    address: { type: String },
    hours: { type: Object },
    updated: { type: Date, default: Date.now },
    // Data URI
    powerRating: { type: Number },
    wifiRating: { type: Number },
    foodRating: { type: Number },

    wifiName: { type: String },
    wifiPassword: { type: String },
    wifiSpeed: { type: Number },
    
    photos: { type: String },
})

module.exports = mongoose.model('cafes', cafeModel)

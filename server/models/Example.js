const mongoose = require('mongoose');

const ExampleSchema = new mongoose.Schema({
    address: String,
    city: String,
    state: String,
    zip: String,
    isMDU: Boolean,
    isSingleFam: Boolean,
    isHomerun: Boolean,
    isDaisyChain: Boolean,
    isTier: Boolean,
    isFiber: Boolean,
    lockboxLocation : String
});

// Create and export the model
module.exports = mongoose.model('Example', ExampleSchema);
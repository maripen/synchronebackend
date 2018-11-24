var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let UserSchema = new Schema({
    name: {type: String, required: true, max: 255},
    email: {type: String, required: true, max: 255},
});


// Export the model
module.exports = mongoose.model('User', UserSchema);
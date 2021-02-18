const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        firstName: {
            type: String, required: true
        },
        lastName: {
            type: String, required: true
        },
        email: {
            type: String, required: true
        },
        city: {
            type: String, required: true
        },
        pincode: {
            type: String, required: true
        },
        phone: {
            type: String, required: true
        },
        description: {
            type: String, required: true
        },

    },
    {
        collection: 'users'
    },

)

module.exports = mongoose.model('users', UserSchema)
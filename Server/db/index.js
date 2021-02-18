const mongoose = require('mongoose');


mongoose
    .connect('mongodb+srv://Azar:Azar@219@cluster0.t7l7j.mongodb.net/demo2', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db


// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const dotenv = require('dotenv');

// const db = require('./db');

// const app = express()
// const apiPort = 4005
// const addUserRoutes = require('./routes/userRoute');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(cors())
// app.use(bodyParser.json())

// db.on('error', console.error.bind(console, 'MongoDB connection error:'))


// app.use('/', addUserRoutes)

// app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import addUserRoutes from './routes/userRoute';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/', addUserRoutes);

app.get('/', (req, res) => {
    res.send('Welcome');
});


const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);
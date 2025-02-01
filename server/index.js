const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

//MIDDLEWARE
app.use(cors());
app.use(express.json());

//test route
app.get('/', (req, res) => {
    res.send('Hello from express!');
});

app.listen(PORT, () => {
    console.log(`server runing on port ${PORT}`)

});

//connect to mongodb
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB conncted'))
.catch(err => console.log(err));
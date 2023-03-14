const express = require("express");
const app = express();
const videosRoutes=require("./routes/videos");
const fs = require("fs");
const axios = require("axios");
const { v4 } = require('uuid');
const cors = require("cors");

app.use(cors());
app.use(express.static('public'));
app.use(express.json());

app.use((req, res, next) => {
    console.log("requested");
    next();
})


app.use('/', videosRoutes);
app.use('/videos', videosRoutes);

app.listen(5000, () => {
    console.log('app running on port 5000');
});
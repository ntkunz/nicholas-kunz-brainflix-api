const express = require("express");
const app = express();
const videosRoutes=require("./routes/videosServer");
const fs = require("fs");
const axios = require("axios");
const { v4 } = require('uuid');
const cors = require("cors");
const PORT = 5000;

app.use(cors());
app.use(express.static('public'));
app.use(express.json());

app.use((req, res, next) => {
    console.log("requested");
    next();
})


// app.use('/', videosRoutes); //THIS PREVENTS MY INFORMATION FROM COMING BACK CORRECTLY FROM SERVER
app.use('/videos', videosRoutes);

app.listen(PORT, () => {
    console.log(`app running on port ${PORT}`);
});
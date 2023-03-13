const express = require("express");
const app = express();
const videosRoutes=require("./routes/videos");
const fs = require("fs");
// const axios = require("axios");
// const commentRoutes=require("./routes/comments")
//above might be different, lifted from demo

app.use(express.static('public'));
app.use(express.json());

app.use((req, res, next) => {
    console.log("requested");
    console.log(req.method);

    next();
})

app.use('/videos', videosRoutes);

app.listen(5000, () => {
    console.log('app running on port 5000');
});
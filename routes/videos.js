const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
// import videos from ('../data/videos');


// const videos = [
    
// ]

router.get("/", (req, res) => {
    res.send('hi');
    // console.log(res);
});

//last friday (3/10) mark gave demo on using .json files to 
//read and write and append json files... check there for more info
fs.readFile("./data/videos.json", (err, data) => {
    if (!err) {
    const videosArray = JSON.parse(data);
    console.log(videosArray);
    }
});

module.exports = router;
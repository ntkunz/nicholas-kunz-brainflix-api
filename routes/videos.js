const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

router.get("/", (req, res) => {
//last friday (3/10) mark gave demo on using .json files to 
//read and write and append json files... check there for more info
//ALSO  demo 3/14 - week 8 tuesday
fs.readFile("./data/videos.json", (err, data) => {
    if (!err) {
    const videosArray = JSON.parse(data);
    //before all of this map stuff (lines 14-22) it was kind of working
    const videosSimple = videosArray.map((video) => {
        return {
            id: video.id,
            title: video.title,
            image: video.image,
            channel: video.channel
        }
    })
    // res.status(200).json(videosArray);
    res.status(200).json(videosSimple);
    }
});
});

module.exports = router;

// app.get("/trees", (_req, res) => {
//     // 1. Read the trees data (and parse it)
//     const treesData = readTrees();
  
//     // 2. Strip down the trees data
//     const strippedData = treesData.map((tree) => {
//       return {
//         id: tree.id,
//         name: tree.name,
//         description: tree.description,
//       }
//     })
// });
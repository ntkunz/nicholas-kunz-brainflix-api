const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
// import { readFile } from fs;

function readFile(file, callback) {
    fs.readFile(file, 'utf-8', callback);
}

//IF i MAKE IT INTO A FUNCTION LIKE BELOW.... IT DOESN'T WORK ON POSTMAN!!!
// function getVideos() {
//     router.get("/", (req, res) => {
//         fs.readFile("./data/videos.json", (err, data) => {
//         if (err) {
//                 return res.send(err);
//             }
//             res.json(JSON.parse(data));
//         });
//     });

router.get("/", (req, res) => {
        fs.readFile("./data/videos.json", (err, data) => {
        if (err) {
                return res.send(err);
            }
            res.json(JSON.parse(data));
        });
    });

    // const videosFile = fs.readFile("/data/videos.json");
    // console.log('getVideos() Ran');
    // const videosData = JSON.parse(videosFile);
    // return videosData;
// }

function writeVideos(data) {
    const stringifiedData = JSON.stringify(data);
    // fs.writeFileSync("./data/videos.json", stringifiedData);
    readFile("/data/videos.json", stringifiedData);
}  


//last friday (3/10) mark gave demo on using .json files to 
//read and write and append json files... check there for more info
//ALSO  demo 3/14 - week 8 tuesday

/* WEDNESDAY MORNING COMMENT OUT
router.get("/", (req, res) => {

    const videosData = getVideos();
    // const videosSimple = videosData.map((video) => {
    //     return {
    //         id: video.id,
    //         title: video.title,
    //         image: video.image,
    //         channel: video.channel
    //     }
    // })
    // res.status(200).json(videosSimple);
    res.status(200).json(videosData);
    });
*/



//all of this below replaced by lines 50-57 above
//THIS WORKS
// router.get("/", (req, res) => {
// fs.readFile("./data/videos.json", (err, data) => {
//     if (!err) {
//     const videosArray = JSON.parse(data);
//     console.log(videosArray);
//     const videosSimple = videosArray.map((video) => {
//         return {
//             id: video.id,
//             title: video.title,
//             image: video.image,
//             channel: video.channel
//         }
//     })
//     // res.status(200).json(videosSimple);
//     res.status(200).json(videosArray);
//     }
// });
// });


/*  ====== Trying to get the entire array returned and having no luck
router.get("/", (req, res) => {
    const videosData = getVideos();
    console.log(videosData)
    res.status(200).send(videosData)
})
*/
//====================================this down to module.exports not working... dynamic return
// router.get("/:id", (req, res) => {
//     fs.readFile("./data/videos/json", (err, data) => {
//         if (!err) {
//             const videosArray = JSON.parse(data);
//             const video = videosArray.find(video =>  video.id === req.params.id)
//             console.log("goof", video)



//             res.status(200).json(video);
//         }
//             // const video = videosArray.find(video =>  video.id === mainVideo.id).map((video) => (
//         }
// )})

module.exports = router;

//things that work
//this gets the entire array parsed
/*
router.get("/", (req, res) => {
    fs.readFile("./data/videos.json", (err, data) => {
    if (err) {
            return res.send(err);
        }
        res.json(JSON.parse(data));
    });
});
*/
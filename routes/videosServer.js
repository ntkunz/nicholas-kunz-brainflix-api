const express = require("express");
const router = express.Router();
const { v4 } = require("uuid");
const fs = require("fs");
// import { readFile } from fs;

//THIS REQAD FILE FUNCTION DOESN'T WORK FOR ME 
// function readFile(file, callback) {
//     fs.readFile(file, 'utf-8', callback);
// }

//IF i MAKE IT INTO A FUNCTION LIKE BELOW.... IT DOESN'T WORK ON POSTMAN!!!
// function getVideos() {
//     const videosFile = fs.readFile("./data/videos.json");
//     const videosData = JSON.parse(videosFile);
//     return videosData;
// }

// function writeVideos(data) {
//     const stringifiedVideo = JSON.stringify(data);
//     fs.writeFile("./data/videos.json", stringifiedVideo);
// }




router.get("/", (req, res) => {
        fs.readFile("./data/videos.json", (err, data) => {
        if (err) {
                return res.send(err);
            }
            //map this information when you have time to only return needed information (id, title, image, channel)
            res.json(JSON.parse(data));
        });
    });

router.get("/:id", (req, res) => {
    fs.readFile("./data/videos.json", (err, data) => {
        if (!err) {
            const videosArray = JSON.parse(data);
            // console.log(videosArray);
            
            const oneVideo = videosArray.find((video) => video.id === req.params.id);
                console.log(oneVideo);
            
            res.status(200).json(oneVideo);
        } else {
            //CHANGE STATUS CODE TO BE CORRECT
            res.status(500).send(err)
        }
    });
});

router.post("/", (req, res) => {
    fs.readFile("./data/videos.json", (err, data) => {
        if (!err) {
            // if key and property are same name, don't need to have key and value
            const parsedData = JSON.parse(data);
            const newVideo = {
                    id: v4(),
                    title: req.body.title,
                    channel: "You",
                    image: `http://localhost:5000/images/image6.jpeg`,
                    description: req.body.description,
                    views: 0,
                    likes: 0,
                    duration: `4:15`,
                    video: `https://project-2-api.herokuapp.com/stream`,
                    timestamp: Date.now(),
                    comments: []
                };
            parsedData.push(newVideo);
            const newVideoStringified = JSON.stringify(data);
            fs.writeFile("./data/videos.json", newVideoStringified, (err) => {

                if (err){
                     res.status(403).send(err); 
                }
            });
            res.status(201).send('howdy');
            } 
    })
})


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
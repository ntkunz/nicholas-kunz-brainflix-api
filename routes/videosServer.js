const express = require("express");
const router = express.Router();
const { v4 } = require("uuid");
const fs = require("fs");

router.get("/", (req, res) => {
        fs.readFile("./data/videos.json", 'utf-8', (err, data) => {
        if (err) {
            return res.status(400).send(err);
        }
        const parsedData = JSON.parse(data)
        const videos = parsedData.map((video) => ({
            id: video.id,
            title: video.title,
            channel: video.channel,
            image: video.image,
        }))
        res.status(200).json(videos);
        });
    });

router.get("/:id", (req, res) => {
    fs.readFile("./data/videos.json", 'utf-8', (err, data) => {
        if (!err) {
            const videosArray = JSON.parse(data);
            const oneVideo = videosArray.find((video) => video.id === req.params.id);
            res.status(200).json(oneVideo);
        } else {
            res.status(400).send(err)
        }
    });
});

router.post("/:id/comments", (req, res) => {
    fs.readFile("./data/videos.json", 'utf-8', (err, data) => {
    if (!err) {
        const videosArray = JSON.parse(data);
        const oneVideo = videosArray.find((video) => video.id === req.params.id);
        
        const newComment = {
            "id": v4(), 
            "name": "Me", 
            "comment": req.body.comment, 
            "likes": 0, 
            "timestamp": Date.now()
        };

        oneVideo.comments.push(newComment);
        const parsedArray = JSON.stringify(videosArray)
        fs.writeFile("./data/videos.json", parsedArray, (err, data) => {
            if (err){
                res.status(400).send(err); 
            } 
            res.status(201).send(data)
        });
        res.status(200).json(oneVideo);
    } else {
        //CHANGE STATUS CODE TO BE CORRECT
        res.status(400).send(err)
    }
});
});

router.delete("/:id/comments/:commentid", (req, res) => {
    fs.readFile("./data/videos.json", 'utf-8', (err, data) => {
    if (!err) {
        const videosArray = JSON.parse(data);
        const oneVideo = videosArray.find((video) => video.id === req.params.id);
        const commentIndex = oneVideo.comments.findIndex((comment) => comment.id === req.params.commentid);
        oneVideo.comments.splice(commentIndex, 1)
        console.log(oneVideo)
        const parsedArray = JSON.stringify(videosArray)
        fs.writeFile("./data/videos.json", parsedArray, (err, data) => {
            if (err){
                res.status(400).send(err); 
            } 
            res.status(200).json(data)
        }
        );
        res.status(200).json(data);
    } else {
        //CHANGE STATUS CODE TO BE CORRECT
        res.status(400).send(err)
    }
});
});

router.post("/", (req, res) => {
    fs.readFile("./data/videos.json", 'utf-8', (err, data) => {
        if (!err) {
            // if key and property are same name, don't need to have key and value
            let parsedData = JSON.parse(data)
            const newVideo = {
                    id: v4(),
                    title: req.body.title,
                    channel: "You",
                    image: `http://localhost:5000/images/bmx-jump.jpg`,
                    description: req.body.description,
                    views: 0,
                    likes: 0,
                    duration: `4:15`,
                    video: `https://project-2-api.herokuapp.com/stream`,
                    timestamp: Date.now(),
                    comments: []
                };

                parsedData.push(newVideo)
            const newVideoStringified = JSON.stringify(parsedData)
            fs.writeFile("./data/videos.json", newVideoStringified, (err, data) => {
                if (err){
                    res.status(400).send(err); 
                } 
                res.status(201).send(data)
            });
            res.status(201).send(data);
        } 
    })
})

module.exports = router;

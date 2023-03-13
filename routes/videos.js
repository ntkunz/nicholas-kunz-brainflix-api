const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
// import videos from 


const videos = [
    
]

router.get("/", (req, res) => {
    res.send(videos);
});

module.exports = router;
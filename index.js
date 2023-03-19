const express = require("express");
const app = express();
const videosRoutes=require("./routes/videosServer");
const cors = require("cors");
const PORT = 5000;

//middleware
app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.use((req, res, next) => {
    console.log("requested");
    next();
})
app.use('/videos', videosRoutes);

app.listen(PORT, () => {
    console.log(`app running on port ${PORT}`);
});
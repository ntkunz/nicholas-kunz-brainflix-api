const express = require("express");
const app = express();
const videosRoutes=require("./routes/videosServer");
const cors = require("cors");
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const { CORS_ORIGIN } = process.env;

//middleware
app.use(cors({ origin: CORS_ORIGIN }));
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
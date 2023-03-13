const express = require("express");
const app = express();
// const commentRoutes=require("./routes/comments")
//above might be different, lifted from demo

app.use(express.static('public'));
app.use(express.json());

app.use((req, res, next) => {
    console.log("requested");
    console.log(req.method);

    next();
})

app.use('/videos', videoRutes);

app.listen(5000, () => {
    console.log('app running on port 5000');
});
const express = require("express");
const cors = require("cors");
const fileUpload = require('express-fileupload')

const gifsRouter = require("./src/routes/gifs");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : './tmp',
    limits: { fileSize: 10000000 }, // 10MB max
    abortOnLimit: true
}));

app.use("/gifs", gifsRouter);

module.exports = app;

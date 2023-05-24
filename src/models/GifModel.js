const { Schema, model } = require("mongoose")

const GifSchema = Schema({
    nameGif:{
        type: String,
        required: true
    },
    imageGif:{
        type: String,
        required: true
    },
    typeGif:{
        type: String,
        required: true
    }
})

const GifModel = model("Gifs", GifSchema)

module.exports = GifModel
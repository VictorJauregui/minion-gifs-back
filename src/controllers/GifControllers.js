const GifModel = require("../models/GifModel")

const addGif = async (req, res) => {
    console.log(req.body)
    try {
        const gif = new GifModel(req.body)
        await gif.save()
        return res.status(200).json({ok:true, gif})
    } catch (error) {
        return res.status(303).json({ok: false, msg: "Something happened", error:error}) 
    }
    
}

const getAllGifs = async (req, res) => {
    try {
        const allGifs = await GifModel.find({})
        res.status(200).send({ status: 'OK', allGifs })
    } catch (error) {
        res.status(500).send({ status: 'FALSE' })
    }
}

module.exports = { addGif, getAllGifs }
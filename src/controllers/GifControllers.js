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

const getGif = async (req, res) => {
    const {id} = req.params

    try {
        const gif = await GifModel.findOne({ _id: id })
        console.log(gif)
        res.status(200).send({ ok:true, gif })
    } catch (error) {
        res.status(500).send({ ok: false, msg: "everything is wrong" })
        console.log(error)
    }
}

const updateGif = async (req, res) => {
    const {newValue, gifId} = req.body
    const {nameGif, typeGif, liked} = newValue
    console.log(newValue)
    try {
        const gifChanged = await GifModel.findOneAndUpdate({_id:gifId}, {nameGif:nameGif, typeGif:typeGif, liked:liked} , {new:true})
        return res.status(200).json({ok:true, gifChanged})   
    } catch (error) {
        console.log(error)
        return res.status(303).json({ok: false, msg: "Something happened", error:error})  
    }

}

const deleteGif = async (req, res) => {
    const {id} = req.params
    
    try {
        const deleteGif = await GifModel.findByIdAndDelete(id)
        res.status(200).send({ status: 'OK', deleteGif })
    } catch (error) {
        res.status(500).send({ status: 'FALSE' })
    }

}



module.exports = { addGif, getAllGifs, getGif, updateGif, deleteGif }
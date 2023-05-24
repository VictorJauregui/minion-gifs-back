const express =  require("express")
const app = express()

const router = express.Router()

const { addGif, getAllGifs } = require("../controllers/GifControllers")


router.get("/", getAllGifs)
router.post("/add-gif", addGif)

// router.get("/:userId", getUser)
// router.get("/id/:userId", getUserById)
// router.post("/",createUsers)
// router.post("/image", editImage)
// router.get("/getuser/:email", getUserByEmail)
// router.patch("/update-user", updateUser)
// router.delete("/delete-user/:id", deleteUser)


module.exports = router;
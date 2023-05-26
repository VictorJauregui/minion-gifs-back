const express = require("express");
const app = express();

const router = express.Router();

const {
  addGif,
  getAllGifs,
  getGif,
  updateGif,
  deleteGif,
  searchGifs,
} = require("../controllers/GifControllers");

router.get("/", getAllGifs);
router.post("/add-gif", addGif);
router.get("/:id", getGif);
router.get("/search/:query", searchGifs);
router.patch("/update-gif", updateGif);
router.delete("/delete-gif/:id", deleteGif);

module.exports = router;

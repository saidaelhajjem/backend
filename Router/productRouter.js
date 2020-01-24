const productController = require("../Controllers/productController");
const router = require("express").Router();
const multer = require("multer");
const upload = multer({ dest: __dirname + "uploads/images" });

router.post("/add", upload.single("image"), productController.ajouterproduit);
router.get("/getall", productController.gettall);
router.get("/getid/:id", productController.getbyid);

module.exports = router;

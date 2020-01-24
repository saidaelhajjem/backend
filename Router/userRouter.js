const userController = require("../Controllers/userController");
const router = require("express").Router();

router.post("/add", userController.ajouteruser);
router.post("/auth", userController.authentification);

module.exports = router;

const userModel = require("../Models/usermodel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  ajouteruser: function(req, res) {
    const user = new userModel({
      nom: req.body.nom,
      password: req.body.password
    });
    user.save(function(err) {
      if (err) {
        res.json({
          state: "no",
          msg: "erreur"
        });
      } else {
        res.json({
          state: "ok",
          msg: "utilisateur ajouté"
        });
      }
    });
  },
  authentification: function(req, res) {
    userModel.findOne({ nom: req.body.nom }, function(err, userInfo) {
      if (err) {
        console.log(err);
      } else {
        //COMPARER pss utilisateur bil pass token
        if (bcrypt.compareSync(req.body.password, userInfo.password)) {
          const token = jwt.sign(
            { id: userInfo._id },
            req.app.get("secretKey"),
            { expiresIn: "1h" }
          );

          res.json({
            status: "success",
            message: "user found ",
            data: { user: userInfo, token: token }
          });
        } else {
          res.json({
            status: "error",
            message: "invalid email or password",
            data: null
          });
        }
      }
    });
  }
};

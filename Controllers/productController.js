const productModel = require("../Models/productmodel");
var fs = require("fs");
const multer = require("multer");
const upload = multer({ dest: __dirname + "/uploads/images" });

module.exports = {
  ajouterproduit: function(req, res) {
    var file = __dirname + "/uploads/images/" + req.file.originalname;
    fs.readFile(req.file.path, function(err, data) {
      fs.writeFile(file, data, function(err) {
        if (err) {
          res.json({
            msg: "errreur"
          });
        } else {
          const Produit = new productModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            quantity: req.body.quantity,
            image: req.file.originalname
          });
          Produit.save(function(err) {
            if (err) {
              res.json({
                state: "no",
                msg: "vous avez un erreur"
              });
            } else {
              res.json({
                state: "ok",
                msg: "Produit ajouté"
              });
            }
          });
        }
      });
    });
  },
  gettall: function(req, res) {
    productModel.find({}, function(err, list) {
      if (err) {
        res.json({
          state: "no",
          msg: "vous avez un erreur"
        });
      } else {
        res.json({
          list
        });
      }
    });
  },
  getbyid: function(req, res) {
    productModel.findOne(
      {
        _id: req.params.id
      },
      function(err, pr) {
        if (err) {
          res.json({
            state: "no",
            msg: "erreur"
          });
        } else {
          res.json(pr);
        }
      }
    );
  }
};

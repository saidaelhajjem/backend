const mongoose = require("mongoose");
var mongodb = "mongodb://127.0.0.1/testdb3";

mongoose.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise; //promise pour bloquer les autre instructions, connect mongodb, retour vers les instructions
var db = mongoose.connection;
db.on("error", console.error.bind(console, "Mondodb connection error:"));

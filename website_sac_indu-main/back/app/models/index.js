const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.actualites = require("./actualite.model.js")(mongoose);
db.products = require("./product.model.js")(mongoose);
db.users = require("./user.model.js")(mongoose);
db.contact_us = require("./contactus.model.js")(mongoose);

module.exports = db;

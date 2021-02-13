const mongoose = require("mongoose");
const {userSchema,movieSchema} = require("./schemas");


const movieDb = mongoose.createConnection("mongodb://localhost:27017/karthi",{ useNewUrlParser: true, useUnifiedTopology: true });

const userModel = movieDb.model("user",userSchema);
const movieModel = movieDb.model("movie",movieSchema);

exports.userModel = userModel;
exports.movieModel = movieModel;
console.log("hii");

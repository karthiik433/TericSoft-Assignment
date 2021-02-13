const mongoose  = require("mongoose");
const {Schema} = require("mongoose");

const userSchema = new mongoose.Schema({
    phone:Number,
    password:String
}
);

const movieSchema = new mongoose.Schema({
    name:String,
    yearOfRelease:Number,
    genre:String
});
console.log("hello");
exports.userSchema = userSchema;
exports.movieSchema = movieSchema;
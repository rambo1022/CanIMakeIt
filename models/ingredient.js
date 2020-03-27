const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ingredientSchema = new Schema({

});

const Recipe = mongoose.model("Recipe", ingredientSchema);

module.exports = Recipe;
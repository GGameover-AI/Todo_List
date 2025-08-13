const mongoose = require("mongoose");

const todoListsSchema = new mongoose.Schema({
  title: {type: String, required: true},
  text: {type: String, required: true}
});


module.exports = mongoose.model("TodoList",todoListsSchema);
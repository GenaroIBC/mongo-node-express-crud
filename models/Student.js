const { Schema, model } = require("mongoose");

const StudentSchema = new Schema({
  name: String,
  age: Number,
});

module.exports = model("Student", StudentSchema);

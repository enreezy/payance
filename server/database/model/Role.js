const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RoleSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  dateAdded: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Role = mongoose.model("role", RoleSchema);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MemberSchema = new Schema({
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  birth: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  contact: {
    type: String,
    require: true,
  },
  website: {
    type: String,
    require: true,
  },
  introduction: {
    type: String,
    require: true,
  },
  roleId: {
    type: Schema.Types.ObjectId,
    require: true,
  },
  departmentId: {
    type: Schema.Types.ObjectId,
    require: true,
  },
  dateAdded: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Member = mongoose.model("member", MemberSchema);

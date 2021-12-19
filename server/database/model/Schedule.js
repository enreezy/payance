const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ScheduleSchema = new Schema({
  memberId: {
    type: Schema.Types.ObjectId,
    require: true,
  },
  timeIn: {
    type: String,
    require: true,
  },
  timeOut: {
    type: String,
    require: true,
  },
  dateAdded: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Schedule = mongoose.model("schedule", ScheduleSchema);

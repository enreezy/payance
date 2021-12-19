const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AttendanceSchema = new Schema({
  memberId: {
    type: Schema.Types.ObjectId,
    require: true,
  },
  scheduleId: {
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

module.exports = Attendance = mongoose.model("attendance", AttendanceSchema);

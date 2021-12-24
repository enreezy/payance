const express = require("express");
const router = express.Router();
const Attendance = require("../../database/model/Attendance");

router.get("/attendances", async (req, res) => {
  const schedAggregation = [
    {
      $lookup: {
        from: "members",
        localField: "memberId",
        foreignField: "_id",
        as: "members",
      },
    },
    {
      $unwind: {
        path: "$members",
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $lookup: {
        from: "schedules",
        localField: "scheduleId",
        foreignField: "_id",
        as: "schedule",
      },
    },
    {
      $unwind: {
        path: "$schedule",
        preserveNullAndEmptyArrays: true,
      },
    },
  ];
  const data = await Attendance.aggregate(schedAggregation);
  res.json({ status: "success", data });
});

router.post("/attendances", async (req, res) => {
  const newAttendance = Attendance({
    memberId: req.body.memberId,
    scheduleId: req.body.scheduleId,
    timeIn: req.body.timeIn,
    timeOut: req.body.timeOut,
  });

  newAttendance
    .save()
    .then((attendances) => res.json({ status: "success", attendances }));
});

module.exports = router;

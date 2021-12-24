const express = require("express");
const router = express.Router();
const Schedule = require("../../database/model/Schedule");

router.get("/schedules", async (req, res) => {
  const schedAggregation = [
    {
      $lookup: {
        from: "members",
        localField: "memberId",
        foreignField: "_id",
        as: "member",
      },
    },
    {
      $unwind: {
        path: "$member",
        preserveNullAndEmptyArrays: true,
      },
    },
  ];
  const data = await Schedule.aggregate(schedAggregation);
  res.json({ status: "success", data });
});

router.post("/schedules", async (req, res) => {
  const newSchedule = Schedule({
    memberId: req.body.memberId,
    timeIn: req.body.timeIn,
    timeOut: req.body.timeOut,
  });

  newSchedule
    .save()
    .then((schedules) => res.json({ status: "success", schedules }));
});

module.exports = router;

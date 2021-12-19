const express = require("express");
const router = express.Router();
const Member = require("../../database/model/Member");

router.get("/members", async (req, res) => {
  const memberAggregate = [
    {
      $lookup: {
        from: "departments",
        localField: "departmentId",
        foreignField: "_id",
        as: "department",
      },
    },
    {
      $lookup: {
        from: "roles",
        localField: "roleId",
        foreignField: "_id",
        as: "role",
      },
    },
  ];
  const data = await Member.aggregate(memberAggregate);

  res.json({ status: "success", data });
});

router.post("/members", async (req, res) => {
  const newMember = Member({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    birth: req.body.birth,
    address: req.body.address,
    contact: req.body.contact,
    website: req.body.website,
    introduction: req.body.introduction,
    roleId: req.body.roleId,
    departmentId: req.body.departmentId,
  });

  newMember.save().then((members) => res.json({ status: "success", members }));
});

module.exports = router;

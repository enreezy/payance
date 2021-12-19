const express = require("express");
const router = express.Router();
const Department = require("../../database/model/Department");

router.get("/departments", async (req, res) => {
  const departments = await Department.find();
  res.json({ status: "success", departments });
});

router.post("/departments", async (req, res) => {
  const newDepartment = Department({
    name: req.body.name,
  });

  newDepartment
    .save()
    .then((departments) => res.json({ status: "success", departments }));
});

module.exports = router;

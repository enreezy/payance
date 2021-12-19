const express = require("express");
const router = express.Router();
const Role = require("../../database/model/Role");

router.get("/roles", async (req, res) => {
  const roles = await Role.find();
  res.json({ status: "success", roles });
});

router.post("/roles", async (req, res) => {
  const newRole = Role({
    name: req.body.name,
  });

  newRole.save().then((roles) => res.json({ status: "success", roles }));
});

module.exports = router;

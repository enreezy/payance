require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const adminURL = "/admin/v1";
const members = require("./routes/api/members");
const departments = require("./routes/api/departments");
const roles = require("./routes/api/roles");
const schedules = require("./routes/api/schedules");
const attendances = require("./routes/api/attendances");

const db = process.env.MONGODB_URI;

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.use(adminURL, members);
app.use(adminURL, departments);
app.use(adminURL, roles);
app.use(adminURL, schedules);
app.use(adminURL, attendances);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

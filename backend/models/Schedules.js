const mongoose = require("mongoose");

const scheduleSchema = new mongoose.Schema({
  scheduleId: {
    type: String,
    required: true,
  },
  route: {
    type: String,
    required: true,
  },
  day: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
});

const Schedule = mongoose.model("Schedules", scheduleSchema);
module.exports = Schedule;

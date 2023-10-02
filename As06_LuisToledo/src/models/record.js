const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecordSchema = new Schema(
  {
    date: {
      type: Date,
      required: true,
    },
  },
  {
    discriminatorKey: "recordType",
    timestamps: true,
  }
);

const HabitRecordSchema = new Schema({
  habitCompletion: {
    type: Boolean,
    required: true,
  },
});

const TimerRecordSchema = new Schema({
  durationInSeconds: {
    type: Number,
    required: true,
  },
});

const HabitRecord = mongoose.model("HabitRecord", HabitRecordSchema);
const TimerRecord = mongoose.model("TimerRecord", TimerRecordSchema);

const Record = mongoose.model("Record", RecordSchema);

module.exports = { Record, HabitRecord, TimerRecord };

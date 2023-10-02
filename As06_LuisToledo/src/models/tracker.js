const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TrackerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  creationTime: {
    type: Date,
    required: true,
    default: Date.now,
  },
  recordsList: {
    type: [
      {
        type: Schema.Types.ObjectId,
        refPath: "recordsList.type",
      },
    ],
  },
});

const Tracker = mongoose.model("Tracker", TrackerSchema);

module.exports = Tracker;

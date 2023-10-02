const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AccountSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  trackers: [
    {
      name: { type: String, required: true },
      type: { type: String, required: true },
      creationTime: { type: Date, required: true, default: Date.now },
      recordsList: {
        type: [{ type: Schema.Types.ObjectId, refPath: "recordsList.type" }],
      },
    },
  ],
});

const Account = mongoose.model("Account", AccountSchema);

module.exports = Account;

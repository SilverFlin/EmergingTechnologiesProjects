const mongoose = require("mongoose");
const {
  Account,
  HabitRecord,
  Record,
  TimerRecord,
  Tracker,
} = require("./models");

mongoose.connect("mongodb://localhost:27017/testModels", {
  useNewUrlParser: true,
});

testDatabase().then(() => {
  mongoose.disconnect();
});

async function testDatabase() {
  // Create an account
  const newAccount = new Account({
    name: "John Doe",
    email: "john.doe@example.com",
  });

  // Create a timer tracker
  const newTimerTracker = new Tracker({
    name: "My Timer Tracker",
    type: "timer",
  });

  // create a habit tracker
  const newHabitTracker = new Tracker({
    name: "My Habit Tracker",
    type: "habit",
  });

  // Create a timer record
  const newTimerRecord = new TimerRecord({ durationInSeconds: 60 });

  // Create a habit record
  const newHabitRecord = new HabitRecord({ habitCompletion: true });

  // Add the records to the trackers
  newTimerTracker.recordsList.push(newTimerRecord);
  newHabitTracker.recordsList.push(newHabitRecord);

  // Add the trackers to the account
  newAccount.trackers.push(newTimerTracker);
  newAccount.trackers.push(newHabitTracker);

  // Save the account
  await newAccount
    .save()
    .then((res) => {
      console.log("-".repeat(80));
      console.log("Account saved successfully (CREATE)\n", res);
      console.log("-".repeat(80));
    })
    .catch((err) => {
      console.log(err);
    });

  // Query the account
  await Account.findOne({ name: "John Doe" })
    .then((account) => {
      console.log("-".repeat(80));
      console.log("Account found (READ)", account);
      console.log("-".repeat(80));
    })
    .catch((err) => {
      console.log(err);
    });

  // update the account
  await Account.findOneAndUpdate(
    { name: "John Doe" },
    { name: "Jane Doe" },
    { new: true }
  )
    .then((account) => {
      console.log("-".repeat(80));
      console.log("Account updated (UPDATE)", account);
      console.log("-".repeat(80));
    })
    .catch((err) => {
      console.log(err);
    });

  // update tracker name
  await Account.findOne({ name: "Jane Doe" })
    .then((account) => {
      account.trackers[0].name = "My Updated Timer Tracker";
      return account.save();
    })
    .then((account) => {
      console.log("-".repeat(80));
      console.log("Account' tracker updated (UPDATE) ", account);
      console.log("-".repeat(80));
    })
    .catch((err) => {
      console.log(err);
    });

  // delete tracker
  await Account.findOne({ name: "Jane Doe" })
    .then((account) => {
      account.trackers.splice(0, 1);
      return account.save();
    })
    .then((account) => {
      console.log("-".repeat(80));
      console.log("Account' tracker deleted (DELETE)", account);
      console.log("-".repeat(80));
    })
    .catch((err) => {
      console.log(err);
    });

  // delete account
  await Account.findOneAndDelete({ name: "Jane Doe" })
    .then((account) => {
      console.log("-".repeat(80));
      console.log("Account deleted (DELETE)", account);
      console.log("-".repeat(80));
    })
    .catch((err) => {
      console.log(err);
    });
}

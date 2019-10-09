const mongoose = require("mongoose");
const dbUrl = "mongodb://localhost:27017/chat";
mongoose.connect(dbUrl);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("success");
});
const mongoose = require("mongoose");
const dbUrl = "mongodb://localhost:27017/chat";
mongoose.connect(dbUrl);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("success");
});
const models = {
  user:{
    "user":{type:String,require:true},
    "pwd":{type:String,require:true},
    "type":{type:String,require:true},
    "avatar":{type:String},
    "desc":{type:String},
    "title":{type:String},
    "company":{type:String},
    "money":{type:String}
  },
  chat:{

  }
}
for (let i in models) {
  mongoose.model(i, new mongoose.Schema(models[i]));
}
module.exports = {
  getModel:function(name){
    return mongoose.model(name);
  }
}
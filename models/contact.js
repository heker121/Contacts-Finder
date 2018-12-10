var mongoose = require("mongoose");

var contactSchema = new mongoose.Schema({
  id: {
       type: mongoose.Schema.Types.ObjectId,
       ref: "User"
    },
    degree: String,
    name: String,
    position: String,
    phone: Number,
    email: String,
    PC: String,
    IP: String,
    building: String
});


module.exports = mongoose.model("Contact", contactSchema);

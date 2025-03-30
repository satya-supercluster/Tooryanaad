const mongoose = require('mongoose');

const guestSchema = {
  SNo: {
    type: Number,
  },
  YEAR: {
    type: Number,
  },
  UNAME: {
    type: String,
  },
  NAME: {
    type: String,
  },
  POST: {
    type: String,
  },
};
const Guests= mongoose.model('Guest',guestSchema);
module.exports = Guests;
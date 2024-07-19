const mongoose = require("mongoose");
require("dotenv").config();
mongoose
  .connect(
    `mongodb+srv://${process.env.REACT_APP_USERNAME_}:${process.env.REACT_APP_PASSWORD_}@${process.env.REACT_APP_CLUSTER_}.nluqxef.mongodb.net/${process.env.REACT_APP_DATABASE_}?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => {
    console.log(err);
  });

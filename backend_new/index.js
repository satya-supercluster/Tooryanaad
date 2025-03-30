const express = require("express");
require("dotenv").config();
require("./database");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(
  // cors({
  //   origin: [
  //     "http://localhost:8080",
  //     "https://tooryanaad-85me.onrender.com",
  //     "https://tooryanaad.org",
  //     "https://www.tooryanaad.org",
  //     "https://tooryanaad.netlify.app",
  //     "https://tooryanaad-info.netlify.app",
  //   ],
  //   credentials: true,
  // })
  cors()
);

const ambassadorRegistrationRouter=require("./routes/ambassador.registration.routes");
app.use("/api",ambassadorRegistrationRouter);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`connection is setup at ${port}`);
});

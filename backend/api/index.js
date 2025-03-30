const express = require("express");
require("./db/conn");
const app = express();
const path = require("path");
const cors = require("cors");
require("dotenv").config();
const {job} = require('./cron');
job.start();


app.get("/", (req, res) => {
  res.send("Backend is up and running");
});

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://tooryanaad-85me.onrender.com",
      "https://tooryanaad.org",
      "https://www.tooryanaad.org",
      "https://tooryanaad.netlify.app",
      "https://tooryanaad-info.netlify.app",
      // "https://tooryanaad-backend-muz0.onrender.com",
      "https://tooryanaad-23.onrender.com/"
    ],
    credentials: true, //access-control-allow-credentials:true
  })
);
app.use(express.json());
// const eventRouter = require("./routers/events");
// const contactRouter = require("./routers/contact");
const teamRouter = require("./routers/teams");
const guestRouter = require("./routers/guests");
const registrationRouter = require("./routers/registration25");
// const A_registrationRouter = require("./routers/a_registration");
// const T_registrationRouter = require("./routers/T_registration");
// const TG_registrationRouter = require("./routers/Tg_registration");
const T_events23Router = require("./routers/t_events23");
// const PdfRouter= require("./routers/pdf")
// const T24Router = require('./routers/T24_Reg');
// const TG24Router = require('./routers/TG24_Reg');
const port = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, "public")));

// app.use(eventRouter);
// app.use(contactRouter);
app.use(teamRouter);
app.use(guestRouter);
app.use(registrationRouter);
// app.use(A_registrationRouter);
// app.use(T_registrationRouter);
// app.use(TG_registrationRouter);
app.use(T_events23Router);
// app.use(PdfRouter);
// app.use(T24Router);
// app.use(TG24Router);


app.listen(port, () => {
  console.log(`connection is setup at ${port}`);
});

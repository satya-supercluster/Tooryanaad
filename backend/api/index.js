const express = require("express");
require("./db/conn");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://tooryanaad-85me.onrender.com",
      "https://tooryanaad.org",
      "https://www.tooryanaad.org",
      "https://tooryanaad.netlify.app",
      "https://tooryanaad-info.netlify.app",
    ],
    credentials: true, //access-control-allow-credentials:true
  })
);

// const eventRouter = require("./routers/events");
// const contactRouter = require("./routers/contact");
const teamRouter = require("./routers/teams");
const guestRouter = require("./routers/guests");
// const registrationRouter = require("./routers/registration");
const A_registrationRouter = require("./routers/a_registration");
// const T_registrationRouter = require("./routers/T_registration");
// const TG_registrationRouter = require("./routers/Tg_registration");
const T_events23Router = require("./routers/t_events23");
// const PdfRouter= require("./routers/pdf")
const port = process.env.PORT || 8000;

app.use(express.json());

// app.use(eventRouter);
// app.use(contactRouter);
app.use(teamRouter);
app.use(guestRouter);
// app.use(registrationRouter);
app.use(A_registrationRouter);
// app.use(T_registrationRouter);
// app.use(TG_registrationRouter);
app.use(T_events23Router);
// app.use(PdfRouter);


app.listen(port, () => {
  console.log(`connection is setup at ${port}`);
});

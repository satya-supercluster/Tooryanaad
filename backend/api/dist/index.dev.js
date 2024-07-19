"use strict";

var express = require("express");

require("./db/conn");

var app = express();

var cors = require("cors");

require("dotenv").config();

app.use(cors({
  origin: ["http://localhost:3000", "https://tooryanaad.onrender.com","https://tooryanaad.org"]
}));

var eventRouter = require("./routers/events");

var contactRouter = require("./routers/contact");

var teamRouter = require("./routers/teams");

var guestRouter = require("./routers/guests");

var registrationRouter = require("./routers/registration");

var A_registrationRouter = require("./routers/a_registration");

var T_registrationRouter = require("./routers/T_registration");

var TG_registrationRouter = require("./routers/Tg_registration");

var T_events23Router = require("./routers/t_events23");

var PdfRouter = require("./routers/pdf");

var port = process.env.PORT || 8000;
app.use(express.json());
app.use(eventRouter);
app.use(contactRouter);
app.use(teamRouter);
app.use(guestRouter);
app.use(registrationRouter);
app.use(A_registrationRouter);
app.use(T_registrationRouter);
app.use(TG_registrationRouter);
app.use(T_events23Router);
app.use(PdfRouter);
app.listen(port, function () {
  console.log("connection is setup at ".concat(port));
});

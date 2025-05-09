import express from "express";
import dotenv from "dotenv";
dotenv.config();
import "./database/index.js";
const app = express();
import cors from "cors";
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

import ambassadorRegistrationRouter from "./routes/ambassadorRegistration.routes.js";
app.use("/api",ambassadorRegistrationRouter);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`connection is setup at ${port}`);
});

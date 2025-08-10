import express from "express";
import dotenv from "dotenv";
dotenv.config();
import "./database/connection.js";
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


const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`connection is setup at ${port}`);
});

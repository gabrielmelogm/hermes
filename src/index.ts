import express from "express";
import { config } from "dotenv";

config();
const app = express();

app.get("/", (req, res) => {
  return res.status(200).send("Hello World");
});

app.listen(process.env.PORT, () =>
  console.log(
    `Server is running on ${process.env.API_URL}${process.env.PORT} 🚀 `
  )
);

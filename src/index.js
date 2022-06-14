import express from "express";
import { config } from "dotenv";

config();
const app = express();

app.get("/", (req, res) => {
  return res.send("Hello World");
});

app.listen(process.env.PORT, () =>
  console.log(`Server is running on port ${process.env.PORT} 🚀 `)
);

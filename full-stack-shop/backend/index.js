import express, { static as expressstatic } from "express";
import { data } from "./data.js";
import { PORT } from "./public/constant.js";
import cors from "cors";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(cors());

app.listen(PORT, () => {
  console.log(`сервер работает на ${PORT}`);
});

app.get("/", (req, res) => {
  res.status(200).json(data);
});

app.use("/static", expressstatic(__dirname + "/public"));

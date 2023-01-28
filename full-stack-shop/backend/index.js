import express, { static as expressstatic } from "express";
import { data } from "./data.js";
import { PORT } from "./public/constant.js";
import cors from "cors";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { filterPriceMaxMin } from "./filters.js";
import { pagination } from "./pagination.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(cors());

app.listen(PORT, () => {
  console.log(`сервер работает на ${PORT}`);
});

app.get("/prod", (req, res) => {
  let elem = req.query.elem; //cколько вывести элементов
  let page = req.query.page; //страничка4

  elem = Number(elem);
  page = Number(page);

  const filterByMinMax = filterPriceMaxMin(req, data);
  const paginationData = pagination(elem, filterByMinMax);

  
  let paginationArr = paginationData[page - 1]; // ppaginationArr == undefined
  if (paginationArr == undefined) {
    paginationArr = [];
  }
  res.status(200).json({
    products: paginationArr,
    sizePages: paginationData.length,
  });
});

app.use("/static", expressstatic(__dirname + "/public"));

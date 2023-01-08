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

// app.get("/", (req, res) => {
// res.status(200).json(data);
// });

// let res = [];
// let value1=2000;
// let value2=3000;
// data.map((elem) =>{
//   if(elem.price >= value1 && elem.price <= value2){
// res.push(elem)
// }})
// console.log(res);

app.get("/prod", (req, res) => {
  let elem = req.query.elem; //cколько вывести элементов
  let page = req.query.page; //страничка
  let min = req.query.min;
  let max = req.query.max;
  console.log(min, max);

  elem = Number(elem);
  page = Number(page);
  min = Number(min);
  max = Number(max);

  let filterProds = [];
  data.map((el) => {
    if (el.price >= min && el.price <= max) {
      filterProds.push(el);
    }
  });
  const result = [];
  for (let i = 0; i < filterProds.length; i = i + elem) {
    const pageArr = filterProds.slice(i, i + elem);
    result.push(pageArr);
  }
  res.status(200).json({ products: result[page], sizePages: result.length });
});
app.use("/static", expressstatic(__dirname + "/public"));

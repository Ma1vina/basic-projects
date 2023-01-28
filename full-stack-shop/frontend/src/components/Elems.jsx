import React from "react";
import { Prod } from "./Prod";
import { useSelector, useDispatch } from "react-redux";
import { MyButton } from "./MyButton";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export function Elems() {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortProd, setSortProd] = useState("");

  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const products = useSelector((state) => state.products.products);
  const pages = useSelector((state) => state.page);

  let options = [
  {value: "sortAlphabet", name: "По алфавиту"},
  {value: "sortPriceUp", name: "По возрастанию цены"},
  {value: "sortPriceLower", name: "По убыванию цены"}
];

  function filterPriceProd(minPrice, maxPrice) {
    let selectPrice = { elem: 5, page: 1};
    let url = new URL("http://localhost:5000/prod");
    
if(sortProd !== ""){
  selectPrice.sort = sortProd;
}
    Object.keys(selectPrice).forEach((key) => {
      url.searchParams.append(key, selectPrice[key]);
    });

    searchParams.set("page", 1);
    if (minPrice !== "") {
      searchParams.set("min", minPrice);
    }
    if (maxPrice !== "") {
      searchParams.set("max", maxPrice);
    }
    if (minPrice !== null) {
      searchParams.set("min", minPrice);
    }
    if (maxPrice !== null) {
      searchParams.set("max", maxPrice);
    }
    searchParams.set("sort", sortProd);
    setSearchParams(searchParams); // cоставляем адрес для фронтенд странички - 1ая страница для файла Elems.

    const prod = fetchGetData(url);
    prod.then((result) => {
      dispatch({
        type: "PRODUCTS",
        payload: result.products,
      });
      dispatch({
        type: "PAGES",
        payload: result.sizePages,
      });
    });
  }

  let arrPages = [];
  for (let i = 1; i <= pages; i++) {
    arrPages.push(i);
  }

  function fetchGetData(url) {
    return fetch(url).then((response) => response.json());
  }

  function clearFilter() {
    setMaxPrice("");
    setMinPrice("");
 

    searchParams.set("max", "");
    searchParams.set("min", "");

    let objForSend = { elem: 5, page: 1 };
    let url = new URL("http://localhost:5000/prod");

    Object.keys(objForSend).forEach(
      (key) => objForSend[key] && url.searchParams.append(key, objForSend[key])
    );
    searchParams.set("page", 1);
    setSearchParams(searchParams);

    const prod = fetchGetData(url);
    prod.then((result) => {
      dispatch({
        type: "PRODUCTS",
        payload: result.products,
      });
      dispatch({
        type: "PAGES",
        payload: result.sizePages,
      });
    });
  }

  return (
    <div>
      {products.length === 0 && pages === 0 ? (
        <div>
          <div className="filterProd">
            Введите цену:
            <input
              type="text"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              placeholder="от..."
            ></input>
            {"руб."}
            <input
              type="text"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              placeholder="до..."
            ></input>
            {"руб."}
            <select 
            onChange={(e) => setSortProd(e.target.value)}>
            <option value="">Сортировка по</option>
            {options.map(option=>
            <option key={option.value} value={option.value}>
                {option.name}
            </option>)}
            </select>
            {"  "}
            <button onClick={() => filterPriceProd(minPrice, maxPrice)}>
              Поиск
            </button>
            <button onClick={() => clearFilter()}>Сбросить фильтр</button>
          </div>
          <div className="text-undefined-elem">Товары не найдены!</div>
        </div>
      ) : (
        <div>
          <div className="filterProd">
            Введите цену:
            <input
              type="text"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              placeholder="от..."
            ></input>
            {"руб."}
            <input
              type="text"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              placeholder="до..."
            ></input>
            {"руб."}
            <select 
            onChange={(e) => setSortProd(e.target.value)}>
            <option value="">Сортировка по</option>
            {options.map(option=>
            <option key={option.value} value={option.value}>
                {option.name}
            </option>)}
            </select>
            {"  "}
            <button onClick={() => filterPriceProd(minPrice, maxPrice)}>
              Поиск
            </button>
            {"  "}
            <button onClick={() => clearFilter()}>Сбросить фильтр</button>
          </div>

          <div className="BodyBox">
            {products.map((elem) => {
              return (
                <Prod
                  text={elem.text}
                  key={elem.id}
                  id={elem.id}
                  image={elem.img}
                  description={elem.description}
                  price={elem.price}
                />
              );
            })}
          </div>
          <div className="boxForPages">
            {arrPages.map((elem, i) => {
              return <MyButton key={i} pageNumber={elem} pages={pages} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
}

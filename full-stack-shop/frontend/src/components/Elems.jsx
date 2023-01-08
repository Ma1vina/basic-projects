import React from "react";
import { Prod } from "./Prod";
import { useSelector, useDispatch } from "react-redux";
import { MyButton } from "./MyButton";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export function Elems() {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const products = useSelector((state) => state.products.products);
  const pages = useSelector((state) => state.page);

  function filterPriceProd(minPrice, maxPrice) {
    let selectPrice = { elem: 5, page: 0, min: minPrice, max: maxPrice };
    let url = new URL("http://localhost:5000/prod");

    Object.keys(selectPrice).forEach((key) => {
      url.searchParams.append(key, selectPrice[key]);
    });
    searchParams.set("page", 0);
    searchParams.set("min", minPrice);
    searchParams.set("max", maxPrice);
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

  let arrPages = [];
  for (let i = 1; i <= pages; i++) {
    arrPages.push(i);
  }

  function fetchGetData(url) {
    return fetch(url).then((response) => response.json());
  }

  return (
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
        <button onClick={() => filterPriceProd(minPrice, maxPrice)}>
          Поиск
        </button>
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
          return (
            <MyButton
              key={i}
              pageNumber={elem}
              pages={pages}
              min={minPrice}
              max={maxPrice}
            />
          );
        })}
      </div>
    </div>
  );
}

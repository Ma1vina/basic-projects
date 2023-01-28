import React, { useEffect } from "react";
import "./App.css";
import { Elems } from "./components/Elems";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Basket } from "./components/Basket";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  function fetchGetData(url) {
    return fetch(url).then((response) => response.json());
  }

  useEffect(() => {
    const countLocal = localStorage.getItem("count");
    const countParse = JSON.parse(countLocal);

    let min = searchParams.get("min");
    let max = searchParams.get("max");

    let objForSend = { elem: 5, page: 1 };
    let url = new URL("http://localhost:5000/prod");
    if (min !== null) {
      objForSend.min = min;
    }
    if (max !== null) {
      objForSend.max = max;
    }
    Object.keys(objForSend).forEach(
      (key) => objForSend[key] && url.searchParams.append(key, objForSend[key])
    );

    if (min !== null) {
      searchParams.set("min", min);
    }
    if (max !== null) {
      searchParams.set("max", max);
    }
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
    dispatch({
      type: "INIT",
      payload: { localC: countParse },
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Elems />}></Route>
        <Route path="/basket" element={<Basket />}></Route>
      </Route>
    </Routes>
  );
}

export default App;

import React, { useEffect } from "react";
import "./App.css";
import { Elems } from "./components/Elems";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Basket } from "./components/Basket";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  function fetchGetData(url) {
    return fetch(url).then((response) => response.json());
  }

  useEffect(() => {
    const countLocal = localStorage.getItem("count");
    const countParse = JSON.parse(countLocal);

    let objForSend = { elem: 5, page: 0, min: 0, max: 1e6 };
    let url = new URL("http://localhost:5000/prod");
    Object.keys(objForSend).forEach((key) => {
      url.searchParams.append(key, objForSend[key]);
    });

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

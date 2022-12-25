import React, { useEffect } from "react";
import "./App.css";
import { Elems } from "./components/Elems";
import { Route, Routes} from "react-router-dom";
import { Layout } from "./components/Layout"
import { Basket } from "./components/Basket";
import { useDispatch } from "react-redux";
import { useState } from "react";


function App() {
  const dispatch = useDispatch();


  function fetchGetData(url){
    return  fetch(url).then(response => response.json())
  }

  useEffect(() => {
    const countLocal = localStorage.getItem("count");
    const countParse = JSON.parse(countLocal);
    
 const prod = fetchGetData("http://localhost:5000")
prod.then((result) => {
  dispatch({
    type: "PRODUCTS",
    payload: result,
  });
})
    dispatch({
      type: "INIT",
      payload: {localC: countParse },
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

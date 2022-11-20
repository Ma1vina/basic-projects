import React, { useEffect } from "react";
import "./App.css";
import { Elems } from "./components/Elems";
import { data } from "./data";
import { Route, Routes} from "react-router-dom";
import { Layout } from "./Layout";
import { Basket } from "./basket";
import { useDispatch } from "react-redux";


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const countLocal = localStorage.getItem("count");
    const countParse = JSON.parse(countLocal);
    dispatch({
      type: "INIT",
      payload: { initCounts: data.length, localC: countParse },
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

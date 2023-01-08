import React from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

export function MyButton(props) {
  const [searchParams, setSearchParams] = useSearchParams();
  let dispatch = useDispatch();
  function fetchGetData(url) {
    return fetch(url).then((response) => response.json());
  }

  function clickPages() {
    let min = searchParams.get("min");
    let max = searchParams.get("max");

    let correctPageNumber = props.pageNumber - 1;
    let objForSend = { elem: 5, page: correctPageNumber, min: min, max: max };
    let url = new URL("http://localhost:5000/prod");

    Object.keys(objForSend).forEach((key) => {
      url.searchParams.append(key, objForSend[key]);
    });

    searchParams.set("page", correctPageNumber + 1);
    setSearchParams(searchParams);

    const prod = fetchGetData(url);
    prod.then((result) => {
      console.log(result);
      dispatch({
        type: "PRODUCTS",
        payload: result.products,
      });
    });
  }
  return (
    <div className="myBtn" onClick={clickPages}>
      {props.pageNumber}
    </div>
  );
}

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
    let sort = searchParams.get("sort");


    let objForSend = { elem: 5, page: props.pageNumber };
    if(sort != null){
      objForSend.sort = sort;
    }
    if (min != null) {
      objForSend.min = min;
    }
    if (max != null) {
      objForSend.max = max;
    }
    let url = new URL("http://localhost:5000/prod");

    Object.keys(objForSend).forEach((key) => {
      objForSend[key] && url.searchParams.append(key, objForSend[key]);
    });

   
    if (min != null) {
      searchParams.set("min", min);
    }
    if (max != null) {
      searchParams.set("max", max);
    }

    if(sort !=null){
      searchParams.set("sort", sort);
    }
    searchParams.set("page", props.pageNumber);
    setSearchParams(searchParams);

    const prod = fetchGetData(url);
    prod.then((result) => {
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

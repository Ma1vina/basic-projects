import { useSelector, useDispatch } from "react-redux";

export function BasketProd(props) {
  const dispatch = useDispatch();
  function inc() {
    dispatch({ type: "INCREMENT", payload: props.id });
  }
  function dec() {
    dispatch({ type: "DECREMENT", payload: props.id });
  }

  function deleteEl() {
    dispatch({ type: "DELETE", payload: props.id });
  }

  const counter = useSelector((state) => {
    let findCount = state.count.count.find((elem) => elem.id === props.id);
    return findCount.count;
  });
  return (
    <div className="listBasketProd">
      <div className="baskImg">
        <img src={props.image} width="100" height="100" />
      </div>
      <div className="baskDesc"> {props.description} </div>
      <div className="baskCount">
        <button onClick={dec}>-</button>
        {counter}
        <button onClick={inc}>+</button>
      </div>
      <div className="baskPrice"> {props.price} ₽</div>
      <button className="btn-style" onClick={deleteEl}>
        удалить
      </button>
    </div>
  );
}

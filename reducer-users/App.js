import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import uuid from "react-uuid";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.cash.count);
  const customer = useSelector((state) => state.customer.customer);
  console.log(customer);

  function addCount(cash) {
    dispatch({
      type: "INCREMENT",
      payload: cash,
    });
  }

  function reCount(cash) {
    dispatch({
      type: "DECREMENT",
      payload: cash,
    });
  }

  function id() {
    return uuid();
  }

  function addCustomer(name) {
    const customer = {
      name,
      id: id(),
    };
    dispatch({ type: "ADD-CUSTOMER", payload: customer });
  }

 const removeCustomer = (customer) =>{
    dispatch({ type:"REMOVE-CUSTOMER", payload: customer.id });
  }

  return (
    <div className="App">
      <div className="block-bonus">
        <div style={{ fontSize: "25px" }}>Бонусов на счете: {count}</div>
        <button className="btn-style" onClick={() => addCount(+prompt())}>
          Пополнить
        </button>
        <button className="btn-style" onClick={() => reCount(+prompt())}>
          Снять
        </button>
      </div>

      <div className="block-client">
        <div style={{ fontSize: "25px" }}>Пользователи: </div>
        <div>
          <button onClick={() => addCustomer(prompt())} className="btn-style">
            Добавить пользователя
          </button>
          {/* <button className="btn-style">Удалить пользователя</button> */}
        </div>

        {customer.length > 0 ? (
          <div>
            {customer.map(elem => (
              <div  onClick={()=> removeCustomer(elem)} style={{ fontSize: "20px"}}>{elem.name}
              </div>
            ))}
          </div>
        ) : (
          <div>Пользователи отсутствуют! </div>
        )}
      </div>
    </div>
  );
}

export default App;

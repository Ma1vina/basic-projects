import { useState } from "react";
import "./App.css";


function App() {
  const [likes, setLikes] = useState(0);
  const [value, setValue] = useState("тут будет текст")

  function increment(){
   return setLikes(likes +1)
  }

  function decrement(){
    return setLikes(likes -1)
   }

  return (
    <div>
      <div>{likes}</div>
      <div>{value}</div>
      <input type="text" value={value} onChange = {event => setValue(event.target.value)}></input>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}

export default App;

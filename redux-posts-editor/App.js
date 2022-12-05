import { useState } from "react";
import "./App.css";
import { Counter } from "./components/Counter";


function App() {
  const [value, setValue] = useState("тут будет текст")

  

  return (
    <div>
<Counter/>
      {/* <div>{value}</div>
      <input type="text" value={value} onChange = {event => setValue(event.target.value)}></input> */}
      
    </div>
  );
}

export default App;

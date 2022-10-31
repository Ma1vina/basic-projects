import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export function Layout(props){
return(
  <div className="App">
<Header value={props.value}/>
<Outlet/>
 </div>
)
}
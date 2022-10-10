import React, {useState} from 'react';
import logo from './logo.png';
import logo1 from './logo1.jpg'
import logo2 from './logo2.jpg'
import logo3 from './logo3.png'
import logo4 from './logo4.jpg'
import logo5 from './logo5.jpg'
import logo6 from './logo6.png'
import './App.css';
import { Elem } from './Elem';
import { Header } from './Header';

function App() {
const[count1, setCount1] = useState(0);
const[count2, setCount2] = useState(0);
const[count3, setCount3] = useState(0);
const[count4, setCount4] = useState(0);
const[count5, setCount5] = useState(0);
const[count6, setCount6] = useState(0);

const[countAll, setCountAll] = useState(0);


function hundlerIncrease(state,funcState,sum){
  funcState(sum=state+1)
  setCountAll(sum);
}

function hundlerDecrease(state,funcState, sum){
    if(state>=1){
        funcState(sum=state-1)
    }else{
        funcState(state);
    }
  setCountAll(sum);
}



  return (

    <div className="App">
       <Header    stateAll={countAll} funcAll={setCountAll} 
       classNameBasket={'basket'} className={"containerHeader"} classNameLog={'logoStyle'} src={logo} alt={"logo"} width={"70px"} height={"70px"}/>

     <div className='containerBody'>
      <Elem src={logo1} alt={"logo1"} width={"250px"} height={"250px"} description={"Бинокль Yukon Point 8*42"} increase={hundlerIncrease} counter={count1} funcSt={setCount1} decrease ={hundlerDecrease} sale={"12 150 ₽"}/>
       <Elem  src={logo2} alt={"logo2"} width={"250px"} height={"250px"} description={"Туристический компас SUUNTO MB-6 Global"} increase={hundlerIncrease} counter={count2} funcSt={setCount2} decrease ={hundlerDecrease} sale={"5 190 ₽"}/>
       <Elem  src={logo3} alt={"logo3"} width={"250px"} height={"250px"} description={"Фонарь PO1 для кемпинга и туризма с солнченой батареей"} increase={hundlerIncrease} counter={count3} funcSt={setCount3} decrease ={hundlerDecrease} sale={"2 100 ₽"}/>
       <Elem  src={logo4} alt={"logo4"} width={"250px"} height={"250px"} description={"Жаровня BOYSCOUT"} increase={hundlerIncrease} counter={count4} funcSt={setCount4} decrease ={hundlerDecrease} sale={"10 199 ₽"}/>
       <Elem  src={logo5} alt={"logo5"} width={"250px"} height={"250px"} description={"Изотермическая сумка Aceline VB-20"} increase={hundlerIncrease} counter={count5} funcSt={setCount5} decrease ={hundlerDecrease} sale={"2 899 ₽"}/>
       <Elem  src={logo6} alt={"logo6"} width={"250px"} height={"250px"} description={"ТФонарь FinePower HM-100"} increase={hundlerIncrease} counter={count6} funcSt={setCount6} decrease ={hundlerDecrease} sale={"1 099 ₽"}/>
     </div>
    </div>
  );
}

export default App;

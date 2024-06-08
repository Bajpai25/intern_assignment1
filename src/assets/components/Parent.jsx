import React,{useState} from 'react'
import Child1 from './Child1';
import Child2 from "./Child2"
import { Link } from 'react-router-dom';
function Parent() {
    const [money, setMoney] = useState(0);

  const increment = () => {
    setMoney(money + 100);
  };

  const decrement = () => {
    setMoney(money - 50);
  };
  return (
    <div>
      <h1>Parent </h1>
      <p>Money: {money}</p>
      <Child1 increment={increment} />
      <Child2 decrement={decrement} />
      <Link to="/color"><button >Go to Question2 </button></Link>
    </div>
  )
}

export default Parent

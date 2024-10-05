import React from "react";
import { useDispatch, useSelector } from "react-redux";
import  {decreaseCount, increaseCount } from "../redux/counter/counterSlice";


const Home = () => {


const dispatch=useDispatch()
const {count}=useSelector((state)=>state.counter)

function inc(){
  dispatch(increaseCount());

}
function dis(){
  dispatch(decreaseCount());

}
  return (
    <>
{count}
      <div className="bg-yellow-700"> This is Home page</div>
      <button onClick={inc} className="px-2 py-1 bg-blue-700">INC</button>
      <button onClick={dis} className="px-2 py-1 bg-blue-700">DEC</button>
    </>
  );
};

export default Home;

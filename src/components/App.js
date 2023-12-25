import React from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";
import { useEffect } from "react";
import { useState } from "react";

const API = "http://localhost:3004/sushis";

function App() {
const [sushi, setSushi] = useState([])
const [money, setMoney] = useState(50)

useEffect(() => {
  console.log("useeffect running")
  fetch(API)
  .then((response) => response.json())
  .then((json) => {
    setSushi(json)
  })
}, [])

function setEaten(id, price) {
  if (money > price) {
    setMoney(money - price)
    setSushi(sushi.map(sushi => sushi.id === id ? {...sushi, eaten: true} : sushi))
  }// else {

  //}
//  console.log(id)
// setSushi(sushi.map(sushi => sushi.id === id ? {...sushi, eaten: true} : sushi))
 //console.log(price)
// if (money > price){
// setMoney(money - price)}
}



console.log(sushi)
  return (
    <div className="app">
      <SushiContainer  setEaten={setEaten} sushi={sushi} />
      <Table money={money}/>
    </div>
  );
}

export default App;

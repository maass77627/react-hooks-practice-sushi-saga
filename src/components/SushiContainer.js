import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";
import {useState} from "react"

function SushiContainer({sushi, setEaten}) {

  const [beltPosition, setBeltPosition] = useState(0)
  const COUNT = 4

function increaseBeltPosition() {
  setBeltPosition((beltPosition + COUNT) % sushi.length)
}

  return (
    <div className="belt">
      {sushi.slice(beltPosition, beltPosition + COUNT).map((sushi) => <Sushi  key={sushi.id} sushi={sushi} setEaten={setEaten}/>)}
      <MoreButton increaseBeltPosition={increaseBeltPosition}/>
    </div>
  );
}

export default SushiContainer;
//name={sushi.name} img_url={sushi.img_url}  price={sushi.price}
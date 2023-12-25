import React from "react";

function MoreButton({increaseBeltPosition}) {

  function handleClick() {
   increaseBeltPosition()
  }


  return <button onClick={handleClick}>More sushi!</button>;
}

export default MoreButton;

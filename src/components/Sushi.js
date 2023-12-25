import React from "react";


function Sushi({ sushi, setEaten }) {
const {img_url, name, price, eaten} = sushi  //id
console.log(sushi.eaten)


  return (
      <div  className="sushi" >
      <div className="plate" onClick={() => setEaten(sushi.id, sushi.price)}>
        {/* Tell me if this sushi has been eaten! */}
        {eaten ? null : (
          <img
            src={img_url}
            alt={"Sushi"}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;

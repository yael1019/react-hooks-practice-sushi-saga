import React, { useState } from "react";

function Sushi({ sush, setEmptyPlates, emptyPlates, budget, setBudget }) {
// INITIALIZE STATE FOR EATING SUSHI
  const [eatSush, setEatSush] = useState(false);
// FUNCTION TO TOGGLE EATSUSH
  function handleClick() {
    setEatSush(eatSush => !eatSush);
    setEmptyPlates([...emptyPlates, sush])
    setBudget(budget - sush.price)
  }
  return (
    <div className="sushi">
      <div className="plate" onClick={ handleClick }>
        {/* Tell me if this sushi has been eaten! */}
        {eatSush ? null : (
          <img
            src={ sush.img_url }
            alt={ sush.name }
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        { sush.name } - ${ sush.price }
      </h4>
    </div>
  );
}

export default Sushi;

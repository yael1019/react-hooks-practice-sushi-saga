import React, { useState, useEffect } from "react";
import MoreButton from "./MoreButton";
import Sushi from './Sushi';

function SushiContainer({ setEmptyPlates, emptyPlates, setBudget, budget }) {
// INITIALIZE STATE FOR SUSHI LIST
  const [sushiList, setSushiList] = useState([]);
// INITIALIZE STATE FOR SUSHI INDEX
  const [only4, setOnly4] = useState(0)
// FETCH SUSHI DATA
  useEffect(() => {
    fetch('http://localhost:3001/sushis')
      .then(resp => resp.json())
      .then(data => setSushiList(data))
  }, [])
// MAP THROUGH SUSHI LIST AND MAKE A CARD FOR EACH SUSHI OBJ
  // ONLY SHOW 4 AT A TIM
  const mappedSushi = sushiList
    .slice(only4, only4 + 4)
    .map(sush => <Sushi key={ sush.id } sush={sush} setEmptyPlates={ setEmptyPlates } emptyPlates={ emptyPlates } setBudget={ setBudget } budget={ budget } />)
  return (
    <div className="belt">
      { mappedSushi }
      <MoreButton setOnly4={ setOnly4 } />
    </div>
  );
}

export default SushiContainer;

import React, { useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
// SET STATE FOR EMPTY PLATES
  const [emptyPlates, setEmptyPlates] = useState([])
// SET STATE FOR MONEY
  const [budget, setBudget] = useState(100);
  return (
    <div className="app">
      <SushiContainer setEmptyPlates={ setEmptyPlates } emptyPlates={ emptyPlates } setBudget={ setBudget } budget={ budget } />
      <Table plates={ emptyPlates } budget={ budget } />
    </div>
  );
}

export default App;

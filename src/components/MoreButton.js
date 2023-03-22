import React from "react";

function MoreButton({ setOnly4 }) {
// FUNCTION TO RESET STATE OF SUSHI INDEX
  function handleClick() {
    setOnly4(only4 => only4 + 4)
  }
  return <button onClick={ handleClick }>More sushi!</button>;
}

export default MoreButton;

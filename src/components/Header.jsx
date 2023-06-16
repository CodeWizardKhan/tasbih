import "../App.css";
import React, { useState } from "react";

const Header = ({ setIncrementVal, setCounter, setInputState, inputstate }) => {
  const resetCounter = () => {
    const result = window.confirm(
      "Confirm Reset:\nYou're about to reset the counter to 0."
    );
    if (result) {
      setCounter(0);
    }
  };
  const handleIncrementByChange = (event) => {
    inputstate && setInputState(false);
    const selectedValue = parseInt(event.target.value);
    setIncrementVal(selectedValue);
  };
  return (
    <>
      <div className="header">
        <select
          name="incrementBy"
          onChange={handleIncrementByChange}
          className="button-17"
        >
          <option value="1">+1</option>
          <option value="2">+2</option>
          <option value="3">+3</option>
          <option value="4">+4</option>
          <option value="5">+5</option>
          <option value="6">+6</option>
          <option value="7">+7</option>
          <option value="8">+8</option>
          <option value="9">+9</option>
          <option value="10">+10</option>
          <option value="15">+15</option>
          <option value="30">+30</option>
          <option value="100">+100</option>
        </select>
        <button
          onClick={() =>
            inputstate ? setInputState(false) : setInputState(true)
          }
          className="button-17"
        >
          Edit
        </button>
        <button onClick={resetCounter} className="button-17">
          Reset
        </button>
      </div>
    </>
  );
};

export default Header;

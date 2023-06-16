import React, { useState } from "react";
import Header from "./Header";

const Tasbih = () => {
  const [counter, setCounter] = useState(0);
  const [inputstate, setInputState] = useState(false);
  const [incrementVal, setIncrementVal] = useState(1);

  const incrementCounter = () => {
    inputstate && setInputState(false);
    setCounter(counter + incrementVal);
  };

  const inputValue = (e) => {
    e.preventDefault();
    setCounter(parseInt(e.target.value));
    console.log(counter);
  };

  const decrementCounter = () => {
    inputstate && setInputState(false);
    if (counter > incrementVal || counter === incrementVal) {
      setCounter(counter - incrementVal);
    } else {
      setCounter(0);
    }
  };

  return (
    <>
      <Header
        setCounter={setCounter}
        setIncrementVal={setIncrementVal}
        setInputState={setInputState}
        inputstate={inputstate}
      />
      <div className="tasbih">
        {inputstate ? (
          <div className="form__group field">
            <input
              class="form__field"
              type="number"
              onChange={inputValue}
              defaultValue={counter}
            />
          </div>
        ) : (
          <h1 className="h1">{counter}</h1>
        )}
        <br />{" "}
        <button
          onClick={incrementCounter}
          className="round"
          style={{
            fontSize: "100px",
            backgroundColor: "rgba(0, 128, 0, 0.5)",
            color: "#00EA86",
            width: "200px",
            height: "200px",
          }}
        >
          +
        </button>
        <br />
        {/* <button onClick={decrementCounter} className='round' style={{ position: 'relative', top: '-30px',   width: '80px', height: '80px', fontSize: '80px', backgroundColor: '#b8114c' }}>-</button> */}
        <button
          onClick={decrementCounter}
          className="round"
          style={{
            position: "relative",
            left: "130px",
            top: "-30px",
            width: "80px",
            height: "80px",
            fontSize: "80px",
            backgroundColor: "#b8114c",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          -
        </button>
        <div class="app-footer">
          Made By Khan -{" "}
          <span style={{ color: "#00BF6E" }}>
            "Verily, in the remembrance of Allah do hearts find rest." (Quran
            13:28)
          </span>
        </div>
      </div>
    </>
  );
};

export default Tasbih;

import React, { useState } from "react";
export default function CalculatorUI() {
  const [firstNumber, setFirstNumber] = useState(3);
  const [secondNumber, setSecondNumber] = useState(6);

  return (
    <div className="cal-bg">
      <div className="inputs">
        <MyInput initialNum={firstNumber} updateMeFromHere={setFirstNumber} />
        +
        <MyInput initialNum={secondNumber} updateMeFromHere={setSecondNumber} />
        <div>
          <p>{firstNumber + secondNumber}</p>
        </div>
        <EvaButton />
      </div>
    </div>
  );
}

function EvaButton() {
  function evaluate() {
    alert("Evaluating");
  }

  return (
    <div>
      <button onClick={evaluate}>Calculate</button>
    </div>
  );
}

function MyInput(props) {
  const [num, setNum] = useState(props.initialNum);
  function changeHandler(evt) {
    setNum(evt.target.value);
    props.updateMeFromHere(evt.target.value);
  }

  return (
    <div className="form-control">
      <input value={num} onChange={changeHandler} />
    </div>
  );
}

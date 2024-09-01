import "./App.css";
import { useState } from "react";

function App() {
  let [state, setState] = useState("");

  function combine(value) {
    if (value != "=" && value != "clear" && value != "c") {
      setState(state + value)
    }

    if (value == "clear") {
      setState('')
    }
    
    if (value == "c") {
    }
    
    if (value == "=") {
      setState(eval(state))
    }
  }

  function change(e) {
    console.log(e.target.value);
  }

  return (
    <>
      <div className="wrapper">
        <input className="screen" type="text" value={state} onChange={change}  placeholder="0"/>
        <div className="grid">
          <div className="button 9" onClick={() => {combine("9")}}>9</div>
          <div className="button 8" onClick={() => {combine("8")}}>8</div>
          <div className="button 7" onClick={() => {combine("7")}}>7</div>
          <div className="button 4" onClick={() => {combine("4")}}>4</div>
          <div className="button 5" onClick={() => {combine("5")}}>5</div>
          <div className="button 6" onClick={() => {combine("6")}}>6</div>
          <div className="button 1" onClick={() => {combine("1")}}>1</div>
          <div className="button 2" onClick={() => {combine("2")}}>2</div>
          <div className="button 3" onClick={() => {combine("3")}}>3</div>
          <div className="button 0" onClick={() => {combine("0")}}>0</div>
          <div className="button = equal" onClick={() => {combine("=")}}>=</div>
          <div className="button clear" onClick={() => {combine("clear")}}>Clear</div>
          <div className="button c" onClick={() => {combine("c")}}>C</div>
          <div className="button + symbol" onClick={() => {combine("+")}}>+</div>
          <div className="button - symbol" onClick={() => {combine("-")}}>-</div>
          <div className="button * symbol" onClick={() => {combine("*")}}>x</div>
          <div className="button / symbol" onClick={() => {combine("/")}}>/</div>
        </div>
      </div>
    </>
  );
}

export default App;

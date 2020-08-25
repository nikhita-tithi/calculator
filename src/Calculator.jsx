import React from "react";
import { calculate, parseCalculationString } from "./utils";
import Buttons from "./Button";

const keys = [
  ["C", "+/-", "%", "/"],
  ["7", "8", "9", "x"],
  ["4", "5", "6", "-"],
  ["1", "2", "3", "+"],
  ["0", ".", "="]
];

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = { q: [] };
  }

  handleCalculate = () => {
    let s = this.state.q.join("");
    // console.log(this.calculate(this.parseCalculationString(s)));
    document.getElementById("result").value = calculate(
      parseCalculationString(s)
    );
  };

  handleClick = e => {
    let v;

    if (e.target.value === "C") {
      this.setState({ q: [] });
      document.getElementById("result").value = "";
    } else if (e.target.value == "+/-") {
      v = "+";
      const q = this.state.q;
      q.push(v);

      this.setState({ q: q });
    } else if (e.target.value === "=") {
      this.handleCalculate();
    } else {
      v = e.target.value;

      const q = this.state.q;
      q.push(v);

      this.setState({ q: q });
    }
  };

  render() {
    return (
      <div>
        <div className="Button-Box">
          <input
            id="displaybox"
            className="tbox"
            value={this.state.q.join("")}
            type="text"
          ></input>
          <input id="result" className="tbox rbox" type="text"></input>
          <div>
            {keys[0].map(item => (
              <Buttons
                key={item}
                onClick={this.handleClick}
                value={item}
              ></Buttons>
            ))}
          </div>
          <div>
            {keys[1].map(item => (
              <Buttons
                key={item}
                onClick={this.handleClick}
                value={item}
              ></Buttons>
            ))}
          </div>
          <div>
            {keys[2].map(item => (
              <Buttons
                key={item}
                onClick={this.handleClick}
                value={item}
              ></Buttons>
            ))}
          </div>
          <div>
            {keys[3].map(item => (
              <Buttons
                key={item}
                onClick={this.handleClick}
                value={item}
              ></Buttons>
            ))}
          </div>
          <div>
            {keys[4].map(item => {
              if (item === "=") {
                return (
                  <Buttons
                    equal="equal"
                    key={item}
                    onClick={this.handleClick}
                    value={item}
                  ></Buttons>
                );
              } else {
                return (
                  <Buttons
                    key={item}
                    onClick={this.handleClick}
                    value={item}
                  ></Buttons>
                );
              }
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;

import React, { Component } from "react";
import Calculator from "./Calculator";

class Parent extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return <Calculator />;
  }
}

export default Parent;

import TableCell from "./TableCell";
import React, { Component } from "react";

class TableRow extends Component {
  constructor(props) {
    super();
    this.state =
      {
        data: "HIHIHIH"
      };
  }
  render() {
    this.cells = [];

    for (let i = 0; i < this.props.numCols; i++) {
      this.cells.push(<TableCell key={i} handleApplyColor={this.props.handleApplyColor} />);
    }
    return <tr>{this.cells}</tr>;
  }
}

export default TableRow;

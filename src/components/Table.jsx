import React, { Component } from "react";
import TableRow from './TableRow.jsx';

class Table extends Component {
  constructor() {
    super();
    this.state =
      {
        numRows: 1,
        numCols: 1,
        selectedColor: 'white',
      };
  }

  addRow = () => this.setState({ numRows: this.state.numRows + 1 })

  render() {
    let rows = [];
    for(let i = 0; i < this.state.numRows; i++){
      rows.push(<TableRow key={i} cols={this.state.numCols} cellColor={this.state.selectedColor}/>);
    }
    return (
      <div id ="container">
        <h1> Pixelate </h1>
        <div id="row-button">
          Rows
          <button onClick={this.addRow}> + </button>
        </div>
        <div>
          <table id="cells">
            <tbody>

              {rows}
            </tbody>
          </table>
        </div>
      </div>

    );
  }
}

export default Table;

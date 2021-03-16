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

  addRow = () => this.setState({ numRows: this.state.numRows + 1})
  addCol = () => this.setState({ numCols: this.state.numCols + 1 })
  minusRow = () => {
    if(this.state.numRows > 0){
      this.setState({numRows: this.state.numRows - 1 });
    }
  }
  minusCol = () => {
    if(this.state.numCols > 0){
      this.setState({numCols: this.state.numCols - 1 });}
  }
  handleColorChange = (event) => {
    this.setState({selectedColor: event.target.value});
  }

  handleApplyColor = (event) => {
    event.target.style.backgroundColor = this.state.selectedColor;
  }


  render() {
    let rows = [];
    for(let i = 0; i < this.state.numRows; i++){
      rows.push(<TableRow key={i} numCols={this.state.numCols} handleApplyColor={this.handleApplyColor}/>);
    }
    return (
      <div id ="container">
        <h1> Pixelate </h1>
        <div id="row-button">
          Rows
          <button onClick={this.addRow}> + </button>
          <button onClick={this.minusRow}> - </button>
        </div>
         <div id="col-button">
          Cols
           <button onClick={this.addCol}> + </button>
           <button onClick={this.minusCol}> - </button>
         </div>
        <select onChange={this.handleColorChange}>
          <option value="white">White</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="yellow">Yellow</option>
          <option value="purple">Purple</option>
          <option value="green">Green</option>
          <option value="orange">Orange</option>
        </select>
        <div>
          <table id="cells">
            <tbody>

              {rows}
            </tbody>
          </table>
        </div>
      </div>    );
  }
}

export default Table;

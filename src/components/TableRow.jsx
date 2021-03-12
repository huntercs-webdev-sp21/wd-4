import React, { Component } from "react";
import TableCell from './TableCell.jsx';

class TableRow extends Component {
  constructor(props){
    super();
  }
  render(){
  let cells = [];
    for (let i = 0; i < this.props.cols; i++) {
      cells.push(<TableCell key={i} cellColor={this.props.cellColor}/>);
  }
    return <tr>{cells}</tr>;
  }
}

export default TableRow;

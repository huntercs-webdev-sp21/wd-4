import React, { Component } from "react";

class TableCell extends Component {
  constructor(props){
    super();
    this.state = {cellColor:props.cellColor};
  }


  render() {

        return (
            <td
              style={{backgroundColor: this.state.cellColor}}
            ></td>
        );
  }

}

export default TableCell;

import React from "react";
import "./../Style.css";
class Operation extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     // this.state = {
  //     //   operator: ""
  //     // };
  //   }
  changeColor = () => {
    console.log("hello");
  };
  render() {
    return (
      <button
        className={this.props.class}
        onClick={() => this.props.onClick(this.props.oprt)}
      >
        {this.props.oprt}
      </button>
    );
  }
}
export default Operation;

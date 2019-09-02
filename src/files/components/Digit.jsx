import React from "react";
import "./../Style.css";
class Digit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: null
    };
  }
  // set_number = () => {
  //   this.state.integer1 = this.state.integer1 * 10;
  //   this.state.integer1 = this.state.integer1 + this.props.number;
  //   this.setState({ integer1: this.state.integer1 });
  //   document.getElementById("screen").innerHTML = this.state.integer1;
  // };
  render() {
    // console.log(this.props.children);
    return (
      <button
        className={this.props.class}
        onClick={() => this.props.onClick(this.props.number)}
      >
        {this.props.number}
      </button>
    );
  }
}

export default Digit;

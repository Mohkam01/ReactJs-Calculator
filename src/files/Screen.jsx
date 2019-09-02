import "bootstrap/dist/css/bootstrap.css";
import "./Style.css";
import React from "react";
import Digit from "./components/Digit";
// import Operator from "./components/Operation";
import Result from "./components/Result";
import Operation from "./components/Operation";

class Screen extends React.Component {
  //   componentWillUpdate(s, t) {
  //     console.log("Hi.............");
  //     console.log(s);
  //     console.log(t);
  //   }

  constructor(props) {
    super(props);
    this.state = {
      integer1: 0,
      integer2: null,
      operator: "",
      int1_check: false,
      int2_check: false,
      int2_value_check: false,
      again_operator: "",
      again_cal_int2: 0,
      again_int1: 0,
      int1_dot: false,
      int2_dot: false,

      screen: 0,
      result: []
    };
  }

  set = (number) => {
    if (this.state.int2_check === false) {
      console.log("in first condition");
      if (this.state.int1_dot === true) {
        const int1_dot_val = number / 10;
        const int1_dot_updated = this.state.integer1 + int1_dot_val;
        this.setState({
          integer1: int1_dot_updated,
          int1_check: true,
          screen: int1_dot_updated
        });
      } else {
        const int1Updated = this.state.integer1 * 10 + number;
        this.setState({
          integer1: int1Updated,
          int1_check: true,
          screen: int1Updated
        });
      }
    } else {
      if (this.state.int2_dot === true) {
        const int2_dot_val = number / 10;
        const int2_dot_updated = this.state.integer2 + int2_dot_val;
        this.setState({
          integer2: int2_dot_updated,

          screen: int2_dot_updated,
          int2_value_check: true
        });
      } else {
        console.log("in second condition");
        const int2Updated = this.state.integer2 * 10 + number;

        this.setState({
          integer2: int2Updated,
          screen: int2Updated,
          int2_value_check: true
        });
      }
    }
  };

  operation = (oprt) => {
    if (this.state.int1_check === false) {
      document.getElementById("screen").innerHTML =
        "kindly enter any number first";
    } else if (this.state.int1_check === true && oprt === "%") {
      this.setState(
        {
          operator: oprt
        },
        () => {
          this.calculate();
        }
      );
      // this.calculate();
    } else if (this.state.int2_check === false && this.state.operator !== "") {
      this.setState({
        operator: oprt,
        int2_check: true,
        again_int1: this.state.integer1
      });
    } else {
      this.setState({
        operator: oprt,
        int2_check: true,
        again_int1: this.state.integer1
      });
      console.log(this.state);
    }
  };
  calculate = () => {
    console.log("in cal");
    if (this.state.int1_check === false) {
      this.setState({ screen: 0 });
    } else if (
      this.state.int2_value_check === false &&
      this.state.operator !== ""
    ) {
      switch (this.state.operator) {
        case "+":
          var result_local = this.state.integer1 + this.state.again_int1;
          this.setState({
            screen: result_local,
            integer1: result_local,
            again_operator: this.state.operator,
            result: result_local,
            integer2: 0,
            int2_check: false
          });
          break;
        case "/":
          var result_local = this.state.integer1 / this.state.again_int1;

          this.setState({
            screen: result_local,
            integer1: result_local,
            again_operator: this.state.operator,
            result: result_local,
            integer2: 0,
            int2_check: false
          });
          break;
        case "*":
          var result_local = this.state.integer1 * this.state.again_int1;
          this.setState({
            screen: result_local,
            integer1: result_local,
            again_operator: this.state.operator,
            result: result_local,
            integer2: 0,
            int2_check: false
          });
          break;
        case "-":
          var result_local = this.state.integer1 - this.state.again_int1;
          this.setState({
            screen: result_local,
            integer1: result_local,
            again_operator: this.state.operator,
            result: result_local,
            integer2: 0,
            int2_check: false
          });
          break;
      }
    } else if (
      this.state.int2_value_check === true &&
      this.state.operator === ""
    ) {
      console.log("in again");
      switch (this.state.again_operator) {
        case "+":
          var result_local = this.state.integer1 + this.state.again_cal_int2;
          this.setState({
            screen: result_local,
            integer1: result_local,
            result: result_local,
            int2_check: false
          });
          break;
        case "-":
          var result_local = this.state.integer1 - this.state.again_cal_int2;
          this.setState({
            screen: result_local,
            integer1: result_local,
            result: result_local,
            int2_check: false
          });
          break;
        case "*":
          var result_local = this.state.integer1 * this.state.again_cal_int2;
          this.setState({
            screen: result_local,
            integer1: result_local,
            result: result_local,
            int2_check: false
          });
          break;
        case "/":
          var result_local = this.state.integer1 / this.state.again_cal_int2;
          this.setState({
            screen: result_local,
            integer1: result_local,
            result: result_local,
            int2_check: false
          });
          break;
      }
    } else {
      switch (this.state.operator) {
        case "%":
          var result_local = this.state.integer1 / 100;
          console.log("in condition");
          this.setState({
            screen: result_local,
            integer1: result_local,
            again_operator: this.state.operator,
            again_cal_int2: this.state.integer2,
            result: result_local,
            integer2: 0,
            operator: ""
          });
          break;
        case "+":
          var result_local = this.state.integer1 + this.state.integer2;
          console.log(result_local);
          this.setState({
            screen: result_local,
            integer1: result_local,
            again_operator: this.state.operator,
            again_cal_int2: this.state.integer2,
            result: result_local,
            integer2: 0,

            operator: ""
          });
          console.log(this.state);
          break;
        case "-":
          var result_local = this.state.integer1 - this.state.integer2;
          this.setState({
            screen: result_local,
            integer1: result_local,
            again_operator: this.state.operator,
            again_cal_int2: this.state.integer2,
            result: result_local,
            integer2: 0,
            operator: ""
          });
          break;
        case "*":
          var result_local = this.state.integer1 * this.state.integer2;
          this.setState({
            screen: result_local,
            integer1: result_local,
            again_operator: this.state.operator,
            again_cal_int2: this.state.integer2,
            result: result_local,
            integer2: 0,
            operator: ""
          });
          break;
        case "/":
          var result_local = this.state.integer1 / this.state.integer2;
          if (result_local === Infinity || isNaN(result_local) === true) {
            document.getElementById("screen").innerHTML =
              "your ans is in infinity";
            break;
          } else {
            this.setState({
              screen: result_local,
              integer1: result_local,
              again_operator: this.state.operator,
              again_cal_int2: this.state.integer2,
              integer2: 0,
              operator: ""
            });
            break;
          }
      }
    }
  };
  dot = () => {
    if (this.state.int1_dot === false) {
      this.setState({ int1_dot: true });
    } else if (this.state.int2_dot === false) {
      this.setState({ int2_dot: true });
    } else
      document.getElementById("screen").innerHTML =
        "you tried to enter the second dot";
  };
  negate = () => {
    if (this.state.int1_check === true) {
      const neg = this.state.integer1 * -1;
      this.setState({ integer1: neg, screen: neg });
    } else {
      const neg = this.state.integer2 * -1;
      this.setState({ integer2: neg, screen: neg });
    }
  };
  show = () => {
    document.getElementById("screen").innerHTML = this.state.result;
  };
  reset = () => {
    this.setState({
      integer1: 0,
      integer2: null,
      operator: "",
      int1_check: false,
      int2_check: false,
      screen: 0,
      again_int1: 0,
      result: 0,
      again_cal_int2: 0,
      int2_value_check: false
    });
    // this.setState(this.baseState);
    document.getElementById("screen").innerHTML = "";
  };

  // componentDidUpdate() {
  //   <Result show={this.state.screen} />;
  // }
  render() {
    return (
      <React.Fragment>
        <p id="screen"></p>
        <div className="container main-screen">
          <div className="screen">
            <Result show={this.state.screen} />
            {/* <Result result={this.state.integer2}></Result> */}
          </div>
          <div className="no-outline">
            <button
              className="btn btn-secondary cal-btn upper-btn btn-ac"
              onClick={this.reset}
            >
              AC
            </button>
            <button
              className="btn btn-secondary cal-btn upper-btn btn-minus"
              onClick={this.negate}
            >
              +/-
            </button>
            <Operation
              class="btn btn-secondary upper-btn cal-btn"
              onClick={this.operation}
              oprt="%"
            />
            <Operation
              class="btn btn-secondary upper-btn cal-btn clr"
              onClick={this.operation}
              oprt="/"
            />
          </div>
          <div className="no-outline">
            <Digit
              class="btn btn-secondary cal-btn clr2"
              onClick={this.set}
              number={7}
            />
            <Digit
              class="btn btn-secondary cal-btn clr2"
              onClick={this.set}
              number={8}
            />
            <Digit
              class="btn btn-secondary cal-btn clr2"
              onClick={this.set}
              number={9}
            />
            <Operation
              class="btn btn-secondary cal-btn clr "
              onClick={this.operation}
              oprt="*"
            />
          </div>
          <div className="no-outline">
            <Digit
              class="btn btn-secondary cal-btn clr2"
              onClick={this.set}
              number={4}
            />
            <Digit
              class="btn btn-secondary cal-btn clr2"
              onClick={this.set}
              number={5}
            />
            <Digit
              class="btn btn-secondary cal-btn clr2"
              onClick={this.set}
              number={6}
            />
            <Operation
              class="btn btn-secondary cal-btn clr"
              onClick={this.operation}
              oprt="-"
            />
          </div>
          <div className="no-outline">
            <Digit
              class="btn btn-secondary cal-btn clr2"
              onClick={this.set}
              number={1}
            />
            <Digit
              class="btn btn-secondary cal-btn clr2"
              onClick={this.set}
              number={2}
            />
            <Digit
              class="btn btn-secondary cal-btn clr2"
              onClick={this.set}
              number={3}
            />
            <Operation
              class="btn btn-secondary cal-btn clr"
              onClick={this.operation}
              oprt="+"
            />
          </div>
          <div className="no-outline">
            <button
              className="btn btn-secondary cal-btn clr2"
              onClick={this.show}
            >
              M
            </button>
            <Digit
              class="btn btn-secondary cal-btn clr2"
              onClick={this.set}
              number={0}
            />
            <button
              className="btn btn-secondary cal-btn clr2"
              onClick={this.dot}
            >
              .
            </button>
            <button
              className="btn btn-secondary cal-btn clr"
              onClick={this.calculate}
            >
              =
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Screen;

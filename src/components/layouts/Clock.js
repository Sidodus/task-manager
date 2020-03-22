import React, { Component } from "react";
import Clock from "react-clock";

class DISPLAY_CLOCK extends Component {
  state = {
    date: new Date()
  };

  componentDidMount() {
    setInterval(() => this.setState({ date: new Date() }), 1000);
  }

  render() {
    return (
      <React.Fragment>
        <Clock value={this.state.date} size={85} />
      </React.Fragment>
    );
  }
}

export default DISPLAY_CLOCK;

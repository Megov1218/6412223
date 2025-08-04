import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      message: "",
      rupees: "",
      euro: "",
    };
  }

  // For Increment button
  increment = () => {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
  };

  sayHello = () => {
    console.log("Hello! You clicked Increase.");
  };

  handleIncreaseClick = () => {
    this.increment();
    this.sayHello();
  };

  // For Decrement button
  decrement = () => {
    this.setState((prevState) => ({ counter: prevState.counter - 1 }));
  };

  // For Say Welcome button
  sayMessage = (msg) => {
    this.setState({ message: msg });
  };

  // For Synthetic event button
  handleSyntheticEvent = (e) => {
    console.log("Synthetic Event Triggered");
    alert("I was clicked");
    console.log(e); // Synthetic event object
  };

  // Currency Converter logic
  handleInputChange = (e) => {
    this.setState({ rupees: e.target.value });
  };

  handleConvert = (e) => {
    e.preventDefault(); // Synthetic event handling
    const euro = (this.state.rupees / 88).toFixed(2);
    this.setState({ euro });
  };

  render() {
    return (
      <div className="App">
        <h1>React Event Examples</h1>

        {/* Counter Section */}
        <h2>Counter: {this.state.counter}</h2>
        <button onClick={this.handleIncreaseClick}>Increase</button>
        <button onClick={this.decrement}>Decrease</button>

        {/* Say Welcome */}
        <br />
        <button onClick={() => this.sayMessage("Welcome to React Event Lab!")}>
          Say Welcome
        </button>
        <p>{this.state.message}</p>

        {/* Synthetic Event */}
        <br />
        <button onClick={this.handleSyntheticEvent}>OnPress</button>

        {/* Currency Converter */}
        <h2>Currency Converter (INR → EUR)</h2>
        <form onSubmit={this.handleConvert}>
          <input
            type="number"
            value={this.state.rupees}
            onChange={this.handleInputChange}
            placeholder="Enter amount in ₹"
          />
          <button type="submit">Convert</button>
        </form>
        {this.state.euro && <p>Amount in Euro: €{this.state.euro}</p>}
      </div>
    );
  }
}

export default App;

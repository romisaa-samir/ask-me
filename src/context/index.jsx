import React, { Component } from "react";

const list = [
  "Yes",
  "No",
  "Maybe",
  "Not sure..try again",
  "Ask a friend",
  "Call the police",
  "go take a shower first",
  "fine",
  "Better not tell you now",
  "take a nap",
  "Don't count on it",
  "what a stupid question ಠ_ಠ",
  "╭∩╮（︶︿︶）╭∩╮",
  "I am not gonna answer ( ͡° ʖ̯ ͡°)",
];

const MyContext = React.createContext();
class MyProvider extends Component {
  state = {
    screen: 0,
    question: "",
    result: "",
  };

  handleGoTo = (val) => {
    this.setState({ screen: val });
  };

  handleQuestion = (val) => {
    this.setState({ question: val });
  };

  getRandomValue = () => {
    return list[Math.floor(Math.random() * list.length)];
  };

  handleResult = () => {
    let random = this.getRandomValue();
    //   if(this.state.result !== ''){
    //     while(rand === this.state.result){
    //       random = this.getRandomValue();
    //     }
    // }
    this.setState({ result: random });
  };

  handleReset = () => {
    this.setState({
      screen: 0,
      question: "",
      result: "",
    });
  };
  render() {
    return (
      <>
        <MyContext.Provider
          value={{
            state: this.state,
            goTo: this.handleGoTo,
            question: this.handleQuestion,
            result: this.handleResult,
            reset: this.handleReset,
          }}
        >
          {this.props.children}
        </MyContext.Provider>
      </>
    );
  }
}
export { MyProvider, MyContext };

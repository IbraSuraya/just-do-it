import React from 'react';
import IncreaseButton from './IncreaseButton';
import CounterDisplay from './CounterDisplay';
import ResetButton from './ResetButton';

class CounterApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };

    // binding event handler
    this.onIncreaseEventHandler = this.onIncreaseEventHandler.bind(this);
    this.onResetEventHandler = this.onResetEventHandler.bind(this);
  }

  onIncreaseEventHandler() {
    this.setState((previousState) => {
      return {
        count: previousState.count + 1
      };
    });
  }
  onResetEventHandler() {
    this.setState(() => {
      return { count: 0 };
    });
  }

  render() {
    return (
      <div>
        <IncreaseButton increase={this.onIncreaseEventHandler} />
        <CounterDisplay count={this.state.count} />
        <ResetButton reset={this.onResetEventHandler} />
      </div>
    );
  }
}
 
export default CounterApp;
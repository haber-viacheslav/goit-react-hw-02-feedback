import PropTypes from 'prop-types';
import { Component } from 'react';
import { Controls } from './Controls';
import { Value } from './Value';
import { CounterContainer } from './Counter.styled';
export class Counter extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {
    initialValue: PropTypes.number.isRequired,
  };
  state = {
    value: this.props.initialValue,
  };
  handleIncrement = () => {
    this.setState(prevState => ({ value: prevState.value + 1 }));
  };
  handleDecrement = e => {
    this.setState(prevState => ({ value: prevState.value - 1 }));
  };
  render() {
    const { value } = this.state;
    return (
      <CounterContainer className="Counter">
        <Value prevValue={value} />
        <Controls
          onDecrement={this.handleDecrement}
          onIncrement={this.handleIncrement}
        />
      </CounterContainer>
    );
  }
}

// Counter.propTypes = {};

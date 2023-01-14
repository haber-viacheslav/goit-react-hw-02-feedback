import PropTypes from 'prop-types';
import { CounterValue } from './Value.styled';
export const Value = ({ prevValue }) => (
  <CounterValue className="Counter__value">{prevValue}</CounterValue>
);

Value.propTypes = {
  prevValue: PropTypes.number,
};

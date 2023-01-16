import PropTypes from 'prop-types';
import {
  FeedbackOptionsList,
  FeedbackOptionsButton,
} from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackOptionsList>
      {options.map((option, idx) => (
        <li key={idx}>
          <FeedbackOptionsButton onClick={() => onLeaveFeedback(option)}>
            {option[0].toUpperCase() + option.slice(1, option.length)}
          </FeedbackOptionsButton>
        </li>
      ))}
    </FeedbackOptionsList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;

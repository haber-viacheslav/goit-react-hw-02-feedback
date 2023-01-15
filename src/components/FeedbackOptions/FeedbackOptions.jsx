import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul>
      {options.map((option, idx) => (
        <li key={idx}>
          <button onClick={() => onLeaveFeedback(option)}>
            {option[0].toUpperCase() + option.slice(1, option.length)}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
};
export default FeedbackOptions;

import PropTypes from 'prop-types';
import {
  StatisticsWrp,
  StatisticsItem,
  StatisticsValue,
} from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatisticsWrp>
      <StatisticsItem>
        Good: <StatisticsValue statsValue={'good'}>{good}</StatisticsValue>
      </StatisticsItem>
      <StatisticsItem>
        Neutral:{' '}
        <StatisticsValue statsValue={'neutral'}>{neutral}</StatisticsValue>
      </StatisticsItem>
      <StatisticsItem>
        Bad: <StatisticsValue statsValue={'bad'}>{bad}</StatisticsValue>
      </StatisticsItem>
      <StatisticsItem>
        Total: <StatisticsValue statsValue={'total'}>{total}</StatisticsValue>
      </StatisticsItem>
      <StatisticsItem>
        Positive feedback:{' '}
        <StatisticsValue>{positivePercentage}%</StatisticsValue>
      </StatisticsItem>
    </StatisticsWrp>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;

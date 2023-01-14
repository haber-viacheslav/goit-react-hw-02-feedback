import PropTypes from 'prop-types';
import { Item } from './StatItem.styled';

export const StatItem = ({ stat: { label, percentage } }) => {
  return (
    <Item>
      <span>{label} </span>
      <span>{percentage}%</span>
    </Item>
  );
};

StatItem.propTypes = {
  stat: PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};

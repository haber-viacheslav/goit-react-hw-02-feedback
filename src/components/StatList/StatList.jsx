import { StatItem } from '../StatItem/StatItem';
import PropTypes from 'prop-types';
import { StatData } from './StatList.styled';

export const StatList = ({ stats }) => {
  return (
    <StatData className="stat-list">
      {stats.map(stat => (
        <StatItem key={stat.id} stat={stat} />
      ))}
    </StatData>
  );
};

StatList.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ),
};

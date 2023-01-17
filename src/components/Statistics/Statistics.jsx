import { StatisticsRating, StatisticsTotal } from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({ good, neutral, bad, total, percentage }) => {
  return (
    <>
      <StatisticsRating>Good: {good}</StatisticsRating>
      <StatisticsRating>Neutral: {neutral}</StatisticsRating>
      <StatisticsRating>Bad: {bad}</StatisticsRating>
      <StatisticsTotal>Total: {total}</StatisticsTotal>
      <StatisticsTotal>Positive Feedback: {percentage}%</StatisticsTotal>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import {
  StatList,
  StatItem,
  StatisticsCalc,
} from 'components/Statistics/Statistics.styled';

export const Statistics = props => {
  const { good, neutral, bad, total, positivePercentage } = props;

  return (
    <div>
      <StatList>
        <StatItem>Good: {good}</StatItem>
        <StatItem>Neutral: {neutral}</StatItem>
        <StatItem>Bad: {bad}</StatItem>
      </StatList>
      <StatisticsCalc>Total: {total}</StatisticsCalc>
      <StatisticsCalc>Positive feedback: {positivePercentage}%</StatisticsCalc>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

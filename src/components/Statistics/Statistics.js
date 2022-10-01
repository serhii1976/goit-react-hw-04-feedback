import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StatList,
  StatItem,
  StatisticsCalc,
} from 'components/Statistics/Statistics.styled';

export class Statistics extends Component {
  render() {
    return (
      <div>
        <StatList>
          <StatItem>Good: {this.props.good}</StatItem>
          <StatItem>Neutral: {this.props.neutral}</StatItem>
          <StatItem>Bad: {this.props.bad}</StatItem>
        </StatList>
        <StatisticsCalc>Total: {this.props.total}</StatisticsCalc>
        <StatisticsCalc>
          Positive feedback: {this.props.positivePercentage}%
        </StatisticsCalc>
      </div>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

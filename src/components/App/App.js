import React, { Component } from 'react';
import { Section } from '../Section/Section ';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Notification } from 'components/Notification/Notification';
import { Wraper } from 'components/App/App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = key => {
    this.setState(prevState => {
      return {
        [key]: prevState[key] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    // this.total = this.state.good + this.state.neutral + this.state.bad;
    // return this.total;
    return (this.total = Object.values(this.state).reduce((acc, number) => {
      return acc + number;
    }, 0));
  };

  countPositiveFeedbackPercentage = () => {
    return this.total ? Math.round((this.state.good / this.total) * 100) : 0;
  };

  render() {
    return (
      <Wraper>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </Wraper>
    );
  }
}

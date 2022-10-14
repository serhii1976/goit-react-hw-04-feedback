import React, { useState } from 'react';
import { Section } from '../Section/Section ';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Notification } from 'components/Notification/Notification';
import { Wraper } from 'components/App/App.styled';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setGooBad] = useState(0);

  let total = 0;

  const options = ['good', 'neutral', 'bad'];

  const onLeaveFeedback = key => {
    switch (key) {
      case 'good':
        setGood(prevGood => {
          return prevGood + 1;
        });
        break;
      case 'neutral':
        setNeutral(prevState => {
          return prevState + 1;
        });
        break;
      case 'bad':
        setGooBad(prevState => {
          return prevState + 1;
        });
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return (total = good + neutral + bad);
  };

  const countPositiveFeedbackPercentage = () => {
    return total ? Math.round((good / total) * 100) : 0;
  };

  return (
    <Wraper>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </Wraper>
  );
};

import React from 'react';
import {
  ButtonsList,
  Button,
} from 'components/FeedbackOptions/FeedbackOptions.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const makeButton = () => {
    return options.map(option => {
      return (
        <Button
          type="button"
          key={option}
          onClick={() => {
            onLeaveFeedback(option);
          }}
        >
          {option}
        </Button>
      );
    });
  };

  return <ButtonsList>{makeButton()}</ButtonsList>;
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

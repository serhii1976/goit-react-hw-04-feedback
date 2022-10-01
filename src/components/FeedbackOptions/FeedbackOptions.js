import React, { Component } from 'react';
import {
  ButtonsList,
  Button,
} from 'components/FeedbackOptions/FeedbackOptions.styled';
import PropTypes from 'prop-types';

export class FeedbackOptions extends Component {
  makeButton = () => {
    return this.props.options.map(option => {
      return (
        <Button
          type="button"
          key={option}
          onClick={() => {
            this.props.onLeaveFeedback(option);
          }}
        >
          {option}
        </Button>
      );
    });
  };
  render() {
    return <ButtonsList>{this.makeButton()}</ButtonsList>;
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

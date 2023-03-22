import React, { Component } from 'react';
import Statistics from './Statistics/Statisctics';
import FeedbackOptions from './FeefbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import { BoxStats } from './Statistics/Statistics.styles';

class MainClass extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleState = option => {
    this.setState(prevstate => ({
      [option]: prevstate[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100) || 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <BoxStats>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleState}
          />
          {total !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </BoxStats>
    );
  }
}

export const App = () => {
  return (
    <div>
      <MainClass />
    </div>
  );
};

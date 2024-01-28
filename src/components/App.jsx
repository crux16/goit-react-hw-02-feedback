import React,{ Component } from 'react'
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export class App extends Component {
  // object holder
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  // display the total number of collected reviews from all categories
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  // display the percentage of positive reviews
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();

    // if total is greater than 0, return the positive percentage, else 0
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  // update the state when a button is clicked
  handleClick = type => {
    this.setState(prevState => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const options = ['good', 'neutral', 'bad'];

    return (
      <>
      <Section title="Click Your Feedback">
        <FeedbackOptions options={options} onLeaveFeedback={this.handleClick} />
      </Section>
      <Section title="Statistic:">
      {total > 0 ? (
        <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        positivePercentage={positivePercentage}
        />
      ):(
        <Notification message="There is no feedback" />
      )}
      </Section>
    </>
    )
  }
}


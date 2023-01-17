import { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = option => {
    switch (option) {
      case 'good':
        return setGood(prevGood => prevGood + 1);
      case 'neutral':
        return setNeutral(prevNeutral => prevNeutral + 1);
      case 'bad':
        return setBad(prevBad => prevBad + 1);
      default:
        return;
    }
  };
  const countTotalFeedback = () => {
    const values = Object.values([good, neutral, bad]);
    return values.reduce((acc, value) => acc + value, 0);
  };
  const countPositiveFeedbackPercentage = (total, good) => {
    const percentage = Math.round((good / total) * 100);
    return percentage;
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage(total, good);
  const options = ['good', 'neutral', 'bad'];
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleFeedback} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            percentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};

export default App;

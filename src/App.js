import { Component } from 'react';

import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';

// import Feedback from './components/Feedback';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleButtonClick = option => {
    this.setState({
        [option]: this.state[option] + 1,
      });
    };
  // };

  render() {
    return (
      <div>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleButtonClick}
          />
        </Section>
      </div>
    );
  }
}

export default App;

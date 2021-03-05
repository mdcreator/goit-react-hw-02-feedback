import { Component } from 'react';
import PropTypes from 'prop-types';
// import s from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {
  static propTypes = {
    options: PropTypes.objectOf(PropTypes.number).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  }

// ({ options, onLeaveFeedback })

  render() {
    return
    <div>
      {options.map(option => (
        <button
          type="button"
          key={option}
          onClick={onLeaveFeedback}
        ></button>
      ))}
      
    </div>
  }
    
}

export default FeedbackOptions;
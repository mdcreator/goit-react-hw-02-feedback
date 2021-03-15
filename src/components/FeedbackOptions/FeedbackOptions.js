import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

class FeedbackOptions extends Component {
  static propTypes = {
    options: PropTypes.objectOf(PropTypes.number).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };

  render() {
    const { options, onLeaveFeedback } = this.props;
    const items = Object.keys(options);

    // function FeedbackOptions({ options, onLeaveFeedback }) {
    //   const items = Object.keys(options);
    return (
      <div className={s.buttonSection}>
        {items.map(item => (
          <button className={s.button}
            type="button"
            key={item}
            onClick={() => {
              onLeaveFeedback(item);
            }}
          >
            {item}
          </button>
        ))}
      </div>
    );
  }
}

// FeedbackOptions.propTypes = {
//   options: PropTypes.objectOf(PropTypes.number).isRequired,
//   onLeaveFeedback: PropTypes.func.isRequired,
// };

export default FeedbackOptions;

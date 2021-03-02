import PropTypes from 'prop-types';
// import s from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map(option => (
        <button
          type="button"
          key={option}
          onClick={onLeaveFeedback}
        ></button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
    options: PropTypes.objectOf(PropTypes.number).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};

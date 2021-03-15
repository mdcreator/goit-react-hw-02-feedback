import React from 'react';
import PropTypes from 'prop-types';

import Notification from '../Notification';
import s from './Statistics.module.css';

// class Statistics extends Component {
//   static propTypes = {
//     state: PropTypes.objectOf(PropTypes.number).isRequired,
//     total: PropTypes.number.isRequired,
//     positivePercentage: PropTypes.number.isRequired,
//   };

//   render() {
//     const { total, positivePercentage } = this.props;
//     const statsTitles = Object.keys(this.props.state);

//     return (
//       <ul>
//         {statsTitles.map(item => (
//           <li key={`${item}Title`}>
//             {item}: {state[item]}
//           </li>
//         ))}

//         <li key={`totalTitle`}>
//           <span>Total: </span>
//           <span>{total}</span>
//         </li>
//         <li key={`positivePercentageTitle`}>Positive feedback: {positivePercentage} %</li>
//       </ul>
//     );
//   }
// }

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  if (total < 1) {
    return <Notification message="No feedback given" />;
  }
  return (
    <ul className={s.statsSection}>
      <li className={s.stats}>Good: {good}</li>
      <li className={s.stats}>Neutral: {neutral}</li>
      <li className={s.stats}>Bad: {bad}</li>
      <li className={s.stats}>Total: {total}</li>
      <li className={s.stats}>Positive feedback: {positivePercentage}%</li>
    </ul>
  );
}

Statistics.propTypes = {
  // props: PropTypes.objectOf(PropTypes.number).isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

// export default Statistics;

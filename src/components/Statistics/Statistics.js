import { Component } from 'react';
import PropTypes from 'prop-types';

class Statistics extends Component {
    static propTypes = {
      state: PropTypes.objectOf(PropTypes.number).isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  };

  render() {
      const { state, total, positivePercentage } = this.props;
      const statistics = Object.keys(state);
      
      return (
          <ul>
              {statistics.map(statistic => (
                  <li key={statistic}>{  }</li>

              ))}
              

          </ul>
      );

  }
}

export default Statistics;

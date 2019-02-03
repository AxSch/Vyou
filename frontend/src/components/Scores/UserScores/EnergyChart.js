import React, {Component} from 'react';
import _ from 'lodash';

class EnergyChart extends Component {
  constructor(props) {
    super(props);
    const {energyScore} = this.props;

    this.state = {
      energyScore: energyScore
    };

  }

  render() {
    let groupedEnergyScores = _.groupBy(this.state.energyScore.scores, 'category');
    groupedEnergyScores = Object.keys(groupedEnergyScores).map((key) => {
      return {label: key, scores: groupedEnergyScores[key]}
    });

    const energyChart = <div className="score-chart-container">
        {groupedEnergyScores.map((score, i) => {
          let total = _.sumBy(score.scores, 'score');
          let height = `${total*10}px`;
          let score_key = `${i}`;

          return <div key={score_key} className='score' style={{height: height}}>
            <h3>{score.label}</h3>
          </div>
        })}
    </div>

    return energyChart;
  }
}

export default EnergyChart;

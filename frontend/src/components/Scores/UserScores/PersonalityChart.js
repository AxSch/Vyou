import React, {Component} from 'react';
import _ from 'lodash';

class PersonalityChart extends Component {
  constructor(props) {
    super(props);
    const {personalityScore} = this.props;

    this.state = {
      personalityScore: personalityScore
    };

  }

  render() {
    let groupedPersonalityScores = _.groupBy(this.state.personalityScore.scores, 'category');
    groupedPersonalityScores = Object.keys(groupedPersonalityScores).map((key) => {
      return {label: key, scores: groupedPersonalityScores[key]}
    });

    const personalityChart = <div className="score-chart-container">
        {groupedPersonalityScores.map((score, i) => {
          let total = _.sumBy(score.scores, 'score');
          let height = `${total*10}px`;
          let score_key = `${i}`;

          return <div key={score_key} className='score' style={{height: height}}>
            <h3>{score.label}</h3>
          </div>
        })}
    </div>

    return personalityChart;
  }
}

export default PersonalityChart;

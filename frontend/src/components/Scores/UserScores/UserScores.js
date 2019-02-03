import React, { Component } from 'react';
import PersonalityChart from './PersonalityChart';
import EnergyChart from './EnergyChart';
import _ from 'lodash';

const subjects = {
  PERSONALITY: "PERSONALITY",
  ENERGY: "ENERGY"
}

class UserScores extends Component {

  componentDidMount() {
    const { getEnergyScore, getPersonalityScore, profile } = this.props;

    getPersonalityScore(profile, subjects.PERSONALITY)
    getEnergyScore(profile, subjects.ENERGY)
  }

  render() {
    const { energyScore, personalityScore  } = this.props;

    let groupedPersonalityScores = _.groupBy(personalityScore.scores, 'category');
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

    return (
      <React.Fragment>
        <div>
          <EnergyChart energyScore={energyScore} />
        </div>
        <hr/>
        <div>
          <PersonalityChart personalityScore={personalityScore} />
        </div>
      </React.Fragment>
    );
  }

}

export default UserScores;

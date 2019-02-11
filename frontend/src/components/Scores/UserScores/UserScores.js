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

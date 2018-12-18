import React, { Component } from 'react';

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
      <div>
        <div>
          <h4>EnergyScore</h4>
          {personalityScore.result}
        </div>
        <div>
          <h4>PersonalityScore</h4>
          {energyScore.result}
        </div>
      </div>
    );
  }

}

export default UserScores;

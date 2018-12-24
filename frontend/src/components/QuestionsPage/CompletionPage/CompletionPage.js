import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


class CompletionPage extends Component {
    renderTitle (questionType) {
      switch (questionType) {
        case 'PS':
          return "Personality Questions";
        case 'EF':
          return "Energy Flow Questions";
        case 'EL':
          return "Energy Levels Questions";
        case 'EM':
          return "Energy Mapping Questions";    
        default:
          break;
      }
    }
    render() {
        const { questionType } = this.props;
        return (
            <div>
                <h3>{this.renderTitle(questionType)} are Completed & Submitted!</h3>
                <Link to="/accounts/profile/">Return to Profile</Link>
            </div>
        );
    }
}

CompletionPage.propTypes = {
  questionType: PropTypes.string
}

export default CompletionPage;
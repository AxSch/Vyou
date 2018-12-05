import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PersonalityQuestions from './Personality/PersonalityQuestions';
import EnergyFlowQuestions from './EnergyFlow/EnergyFlowQuestions';


class QuestionsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            category: '',
        };

        this.renderCategoryQuestions = this.renderCategoryQuestions.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    componentDidMount() {
        const { fetchPSQuestions, fetchEFQuestions, fetchELQuestions, fetchEMQuestions } = this.props;
        fetchPSQuestions('PS');
        fetchEFQuestions('EF');
        fetchELQuestions('EL');
        fetchEMQuestions('EM');

    }
    
    handleOnChange(e) {
        const value = e.target.value;
        this.setState(prevState => {
            return {
                category: value
            }
        }, () => {
            console.log(value)
        });
    }

    renderCategoryQuestions(category) {
        const { personalityQuestions, energyFlowQuestions, resetAllAnswers, answers } = this.props;
        switch(category) {
            case 'PERSONALITY':
                return <PersonalityQuestions questions={personalityQuestions} answers={answers} resetAllAnswers={resetAllAnswers}/>;
            case 'ENERGYFLOW':
                return <EnergyFlowQuestions questions={energyFlowQuestions} answers={answers} resetAllAnswers={resetAllAnswers}/>;
            default:
                return null;
        }
    }

    render() {
        const { category } = this.state;
        return (
            <div>
                <h2>Questions</h2>
                <div>
                    <h4>Progress</h4>
                </div>
                <div>
                    <h4>Topics</h4>
                    <label htmlFor={"personality"}>Personality</label>
                    <input type="radio" name={"questions"} value={"PERSONALITY"} id={"personality"} onChange={(e) => this.handleOnChange(e)}/>
                    <label htmlFor={"energyLevels"}>Energy Levels</label>
                    <input type="radio" name={"questions"} value={"ENERGYLEVELS"} id={"energyLevels"} onChange={(e) => this.handleOnChange(e)}/>
                    <label htmlFor={"energyFlow"}>Energy Flow</label>
                    <input type="radio" name={"questions"} value={"ENERGYFLOW"} id={"energyFlow"} onChange={(e) => this.handleOnChange(e)}/>
                    <label htmlFor={"energyMapping"}>Energy Mapping</label>
                    <input type="radio" name={"questions"} value={"ENERGYMAPPING"} id={"energyMapping"} onChange={(e) => this.handleOnChange(e)}/>
                </div>
                {this.renderCategoryQuestions(category)}
            </div>
        );
    }
}

QuestionsPage.propTypes = {
    fetchPSQuestions: PropTypes.func,
    fetchEFQuestions: PropTypes.func,
    personalityQuestions: PropTypes.array,
    answers: PropTypes.object
}

export default QuestionsPage;

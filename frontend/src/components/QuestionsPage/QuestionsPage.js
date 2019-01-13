import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import PersonalityQuestions from './Personality/PersonalityQuestions';
import EnergyFlowQuestions from './EnergyFlow/EnergyFlowQuestions';
import EnergyLevelQuestions from './EnergyLevel/EnergyLevelQuestions';
import EnergyMappingQuestions from './EnergyMapping/EnergyMappingQuestions';
import RequestUserLogIn from '../Login/RequestUserLogIn/RequestUserLogIn';
import NavBarContainer from '../NavBar/NavBarContainer';


class QuestionsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            category: (props.match.params.hasOwnProperty('questionId') ? props.match.params.questionId.toUpperCase() : ''),
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
        }, () => {});
    }

    renderCategoryQuestions(category) {
        const { 
            personalityQuestions, 
            energyFlowQuestions, 
            energyLevelQuestions, 
            energyMappingQuestions, 
            resetAllAnswers, 
            answers, 
            fetchCompPSQuestions, 
            fetchCompEFQuestions, 
            fetchCompELQuestions, 
            fetchCompEMQuestions,  
            profile, sendPSAnswers, 
            sendEFAnswers, 
            sendELAnswers, 
            sendEMAnswers, 
            updatePSAnswers, 
            updateEFAnswers, 
            updateELAnswers, 
            updateEMAnswers
        } = this.props;
        
        switch(category) {
            case 'PERSONALITY':
                return <PersonalityQuestions questions={personalityQuestions} answers={answers} resetAllAnswers={resetAllAnswers} fetchCompPSQuestions={fetchCompPSQuestions} profile={profile} sendAnswers={sendPSAnswers} updateAnswers={updatePSAnswers} />;
            case 'ENERGYFLOW':
                return <EnergyFlowQuestions questions={energyFlowQuestions} answers={answers} resetAllAnswers={resetAllAnswers} fetchCompEFQuestions={fetchCompEFQuestions} profile={profile} sendAnswers={sendEFAnswers} updateAnswers={updateEFAnswers}/>;
            case 'ENERGYLEVEL':
                return <EnergyLevelQuestions questions={energyLevelQuestions} answers={answers} resetAllAnswers={resetAllAnswers} fetchCompELQuestions={fetchCompELQuestions} profile={profile} sendAnswers={sendELAnswers} updateAnswers={updateELAnswers}/>;
            case 'ENERGYMAPPING':
                return <EnergyMappingQuestions questions={energyMappingQuestions} answers={answers} resetAllAnswers={resetAllAnswers} fetchCompEMQuestions={fetchCompEMQuestions} profile={profile} sendAnswers={sendEMAnswers} updateAnswers={updateEMAnswers}/>;
            default:
                return null;
        }
    }

    checkUserLoggedIn(isLogged){
        const { category } = this.state;
        
        if (isLogged) {
            return (
                <Fragment>
                    <h2>Questions</h2>
                    <div>
                        {/*<h4>Progress</h4>*/}
                    </div>
                    <div>
                        {/*<h4>Topics</h4>*/}
                        {/*<label htmlFor={"personality"}>Personality</label>*/}
                        {/*<input type="radio" name={"questions"} value={"PERSONALITY"} id={"personality"} onChange={(e) => this.handleOnChange(e)}/>*/}
                        {/*<label htmlFor={"energyLevel"}>Energy Levels</label>*/}
                        {/*<input type="radio" name={"questions"} value={"ENERGYLEVEL"} id={"energyLevel"} onChange={(e) => this.handleOnChange(e)}/>*/}
                        {/*<label htmlFor={"energyFlow"}>Energy Flow</label>*/}
                        {/*<input type="radio" name={"questions"} value={"ENERGYFLOW"} id={"energyFlow"} onChange={(e) => this.handleOnChange(e)}/>*/}
                        {/*<label htmlFor={"energyMapping"}>Energy Mapping</label>*/}
                        {/*<input type="radio" name={"questions"} value={"ENERGYMAPPING"} id={"energyMapping"} onChange={(e) => this.handleOnChange(e)}/>*/}
                    </div>
                    {this.renderCategoryQuestions(category)}
                </Fragment>
            );
        } else {
            return <RequestUserLogIn />
        }
    }

    render() {
        console.log("QuestionsPage");

        const { login } = this.props;
        return (
            <div>
                <NavBarContainer />
                {this.checkUserLoggedIn(login.loggedIn)}
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

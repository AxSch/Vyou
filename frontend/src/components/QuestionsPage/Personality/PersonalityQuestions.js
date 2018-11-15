import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';


class PersonalityQuestions extends Component {
    Question(questions) {
        return questions.map((question) => {
                return (
                    <Fragment>
                        <li key={question.id}>
                            {question.fields.question}
                            <div>
                                <label htmlFor="stronglyAgree">Strongly Agree</label>
                                <input type="radio" name="answers" value={3} id="stronglyAgree" /> 
                                <label htmlFor="stronglyAgree">Slightly Agree</label>
                                <input type="radio" name="answers" value={2} id="stronglyAgree" />  
                                <label htmlFor="stronglyAgree">Agree</label>
                                <input type="radio" name="answers" value={1} id="stronglyAgree" />  
                                <label htmlFor="stronglyAgree">Disagree</label>
                                <input type="radio" name="answers" value={-1} id="stronglyAgree" />  
                                <label htmlFor="stronglyAgree">Slightly Disagree</label>
                                <input type="radio" name="answers" value={-2} id="stronglyAgree" />  
                                <label htmlFor="stronglyAgree">Strongly Disagree</label>
                                <input type="radio" name="answers" value={-3} id="stronglyAgree" />                         
                            </div>
                        </li>
                    </Fragment>
                );
        });
    }
    render() {
        const { questions } = this.props;
        return (
            <div>
                <h2>Personality Questions</h2>
                <ul>
                    {this.Question(questions)}
                </ul>
            </div>
        );
    }
}

PersonalityQuestions.PropTypes = {
    questions: PropTypes.array
}

export default PersonalityQuestions;
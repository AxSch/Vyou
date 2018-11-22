import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Answers from '../../Answers/Answers';


class Question extends Component {
    render() {
        const { question } = this.props;
        // console.log(question.fields);
        return (
          <Fragment>
              <li key={question.id}>
                {question.fields.question}
                <Answers questionId={question.id} />
            </li>
          </Fragment>
        );
    }
}

Question.PropTypes = {
    question: PropTypes.object
}

export default Question;

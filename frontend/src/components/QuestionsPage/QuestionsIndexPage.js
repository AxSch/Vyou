import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';
import NavBarContainer from "../NavBar/NavBarContainer";
import HeaderBarContainer from "../HeaderBar/HeaderBarContainer";

class QuestionsIndexPage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log("QuestionsIndexPage");

        return (
            <div>
                <NavBarContainer />

                <div className="main-container">
                    <HeaderBarContainer/>

                    <div className="tasks-container">
                        <div className="task">
                            <Link to="/questions/personality">
                                <span className="task-category">Questionnaire</span>
                                <span className="task-title">Personality</span>
                            </Link>
                        </div>

                        <div className="task">
                            <Link to="/questions/energyflow">
                                <span className="task-category">Questionnaire</span>
                                <span className="task-title">Energy Flow</span>
                            </Link>
                        </div>

                        <div className="task">
                            <Link to="/questions/energylevel">
                                <span className="task-category">Questionnaire</span>
                                <span className="task-title">Energy Level</span>
                            </Link>
                        </div>

                        <div className="task">
                            <Link to="/questions/energymapping">
                                <span className="task-category">Questionnaire</span>
                                <span className="task-title">Energy Mapping</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default QuestionsIndexPage;

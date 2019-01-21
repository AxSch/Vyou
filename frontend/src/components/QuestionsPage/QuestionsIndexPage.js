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
                        <div className="task" id="personality-task">
                            <Link to="/questions/personality">
                                <div className="task-details">
                                    <span className="category">Questionnaire</span>
                                    <span className="title">Personality</span>
                                </div>
                            </Link>
                        </div>

                        <div className="task" id="energyflow-task">
                            <Link to="/questions/energyflow">
                                <div className="task-details">
                                    <span className="category">Questionnaire</span>
                                    <span className="title">Energy Flow</span>
                                </div>
                            </Link>
                        </div>

                        <div className="task" id="energylevel-task">
                            <Link to="/questions/energylevel">
                                <div className="task-details">
                                    <span className="category">Questionnaire</span>
                                    <span className="title">Energy Level</span>
                                </div>
                            </Link>
                        </div>

                        <div className="task" id="energymapping-task">
                            <Link to="/questions/energymapping">
                                <div className="task-details">
                                    <span className="category">Questionnaire</span>
                                    <span className="title">Energy Mapping</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default QuestionsIndexPage;

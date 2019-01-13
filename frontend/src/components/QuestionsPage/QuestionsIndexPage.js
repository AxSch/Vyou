import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';

class QuestionsIndexPage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log("QuestionsIndexPage");

        return (
            <div>
                questions index
                <br/>
                <Link to="/questions/personality">Personality</Link> <br/>
                <Link to="/questions/energyflow">Energy Flow</Link> <br/>
                <Link to="/questions/energylevel">Energy Level</Link> <br/>
                <Link to="/questions/energymapping">Energy Mapping</Link> <br/>
            </div>
        );
    }
}

export default QuestionsIndexPage;

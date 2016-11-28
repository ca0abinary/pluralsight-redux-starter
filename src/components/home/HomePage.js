import React, {Component} from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';

class HomePage extends Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>Pluralsight Administration</h1>
                <p>React, Redux, and React Router in ES2015 for ultra-responsive web apps.</p>
                <RaisedButton primary={true} containerElement={<Link to="about"/>} label="Learn more"/>
            </div>
        );
    }
}

export default HomePage;
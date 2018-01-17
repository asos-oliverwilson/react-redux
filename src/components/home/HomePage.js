import React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>Oliver Wilson Personal Goals</h1>
                <p>I thought this would be a good place to provide evidence of my progress at Asos.</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn more muthafucka</Link>
            </div>
        );
    }
}

export default HomePage;
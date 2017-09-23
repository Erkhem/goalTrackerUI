import React from 'react';
import {Link} from 'react-router-dom'

export default class NewGoal extends React.Component{

    render() {
        return (
            <div>
                <h1>NEW</h1>
                <button>SAVE</button>
                <Link to="/index">BACK</Link>
            </div>
        );
    }
}
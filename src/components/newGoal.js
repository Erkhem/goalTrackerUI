import React from 'react';
import {Link} from 'react-router-dom'

export default class NewGoal extends React.Component{
    componentWillReceiveProps(nextProps) {
        console.log('BEGIN componentWillReceiveProps');
        console.log(nextProps);
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <h1>NEW</h1>
                <button>SAVE</button>
                <Link to="/index">BACK</Link>
            </div>
        );
    }
}
import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Dashboard from './components/dashboard';
import NewGoal from './components/newGoal';

export default class App extends React.Component {
    render() {
        return(
            <div >
                <div>
                    <Link to="/newGoal">Add goal :)</Link>
                    <Route exact path="/index" component={Dashboard}/>
                    <Route exact path="/newGoal" component={NewGoal}/>
                </div>
            </div>
        )
    }
}
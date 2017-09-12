import { combineReducers } from 'redux';
import DashboardReducers from './dashboard-reducer';
import NewGoalReducers from './newGoal-reducer';

const rootReducer = combineReducers({
    dashboard: DashboardReducers,
    newGoal: NewGoalReducers
});
export default rootReducer;

import { combineReducers } from 'redux';
import valueReducer from './valueReducer';
import displayReducer from './displayReducer';

const rootReducer = combineReducers({
    value: valueReducer,
    display: displayReducer
})

export type AppState = ReturnType<typeof rootReducer>
export default rootReducer;
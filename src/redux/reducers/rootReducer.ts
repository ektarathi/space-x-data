import { combineReducers } from 'redux';
import valueReducer from './valueReducer';

const rootReducer = combineReducers({
    value: valueReducer,
})

export type AppState = ReturnType<typeof rootReducer>
export default rootReducer;
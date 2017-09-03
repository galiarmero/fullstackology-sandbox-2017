import { combineReducers } from 'redux';

import weather from './reducer_weather';

const rootReducer = combineReducers({
  weather: weather
});

export default rootReducer;

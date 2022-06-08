import { combineReducers } from 'redux';
import custom from 'redux/modules/custom';

const rootReducer = combineReducers({
  custom,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;

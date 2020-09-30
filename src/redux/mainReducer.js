import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import Dashboard12118003Reducer from '../features/Dashboard12118003/redux/reducers'
import EmailAuth2118002Reducer from '../features/EmailAuth2118002/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
Dashboard12118003: Dashboard12118003Reducer,
EmailAuth2118002: EmailAuth2118002Reducer,

});
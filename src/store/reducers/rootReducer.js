import projectReducer from './projectReducer'
import { combineReducers } from 'redux'
import commentReducer from './commentReducer';



const rootReducer = combineReducers({
  project: projectReducer,
  comments:commentReducer,

});

export default rootReducer

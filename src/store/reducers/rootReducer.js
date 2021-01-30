import projectReducer from './projectReducer'
import { combineReducers } from 'redux'
import commentReducer from './commentReducer';

import kyaBoltiPublicReducer from './kyaBoltiPublicReducer';
import fakeOrNotReducer from './fakeOrNotReducer';
import daamSahiHaiReducer from './daamSahiHaiReducer';
import fYIReducer from './fYIReducer';
import kaunReducer from './kaunReducer';






const rootReducer = combineReducers({
  project: projectReducer,
  comments:commentReducer,
  fakeOrNot:fakeOrNotReducer,
  kyaBoltiPublic:kyaBoltiPublicReducer,
  daamSahiHai:daamSahiHaiReducer,
  fYI:fYIReducer,
  kaun:kaunReducer

});

export default rootReducer

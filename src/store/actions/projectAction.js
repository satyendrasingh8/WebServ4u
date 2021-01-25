import db from '../../config/firebase'


export const createProject = (formData) => {
    return (dispatch) => {
      
      db.collection('createQuiz').add({
        ...formData,
        createdAt: Date.now()
      }).then(() => {
        dispatch({ type: 'CREATE_PROJECT_SUCCESS',formData });
      }).catch(err => {
        dispatch({ type: 'CREATE_PROJECT_ERROR' }, err);
      });
    }
  };


  
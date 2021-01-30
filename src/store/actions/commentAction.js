import firebase from '../../config/firebase'


export const createComment = (comment) => {
    return (dispatch) => {
      const db = firebase.firestore();
      db.collection('comments').add({
        ...comment,
        createdAt: Date.now()
      }).then(() => {
        dispatch({ type: 'CREATE_COMMENT_SUCCESS',comment });
      }).catch(err => {
        dispatch({ type: 'CREATE_COMMENT_ERROR' }, err);
      });
    }
  };


  
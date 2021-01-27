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

  export const fakeOrNot = (formData) => {
    return (dispatch) => {
      
      db.collection('fakeOrNot').add({
        ...formData,
        createdAt: Date.now()
      }).then(() => {
        dispatch({ type: 'CREATE_FAKE_OR_NOT_SUCCESS',formData });
      }).catch(err => {
        dispatch({ type: 'CREATE_FAKE_OR_NOT_ERROR' }, err);
      });
    }
  };

  export const kyaBoltiPublic = (formData) => {
    return (dispatch) => {
      
      db.collection('kyaBoltiPublic').add({
        ...formData,
        createdAt: Date.now()
      }).then(() => {
        dispatch({ type: 'CREATE_KYA_BOLTI_PUBLIC_SUCCESS',formData });
      }).catch(err => {
        dispatch({ type: 'CREATE_KYA_BOLTI_PUBLIC_ERROR' }, err);
      });
    }
  };

  export const daamSahiHai = (formData) => {
    return (dispatch) => {
      
      db.collection('daamSahiHai').add({
        ...formData,
        createdAt: Date.now()
      }).then(() => {
        dispatch({ type: 'CREATE_DAAM_SAHI_HAI_SUCCESS',formData });
      }).catch(err => {
        dispatch({ type: 'CREATE_DAAM_SAHI_HAI_ERROR' }, err);
      });
    }
  };

  
  
  export const fYI = (formData) => {
    return (dispatch) => {
      
      db.collection('fYI').add({
        ...formData,
        createdAt: Date.now()
      }).then(() => {
        dispatch({ type: 'CREATE_FYI_SUCCESS',formData });
      }).catch(err => {
        dispatch({ type: 'CREATE_FYI_ERROR' }, err);
      });
    }
  };

  export const kaun = (formData) => {
    return (dispatch) => {
      
      db.collection('kaun').add({
        ...formData,
        createdAt: Date.now()
      }).then(() => {
        dispatch({ type: 'CREATE_KAUN_SUCCESS',formData });
      }).catch(err => {
        dispatch({ type: 'CREATE_KAUN_ERROR' }, err);
      });
    }
  };
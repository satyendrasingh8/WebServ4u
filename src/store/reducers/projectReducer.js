const initState = {
  quizList:[]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT_SUCCESS':
      
      return {
        ...state,
          quizList:action.formData 
      };
    case 'CREATE_PROJECT_ERROR':
    
      return state;
    default:
      return state;
  }
};

export default projectReducer;
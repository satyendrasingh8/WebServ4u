const initState = {
    quizList:[]
  };
  
  const fYIReducer = (state = initState, action) => {
    switch (action.type) {
      case 'CREATE_FYI_SUCCESS':
        
        return {
          ...state,
            quizList:action.formData 
        };
      case 'CREATE_FYI_ERROR':
      
        return state;
      default:
        return state;
    }
  };
  
  export default fYIReducer;
const initState = {
    quizList:[]
  };
  
  const fakeOrNotReducer = (state = initState, action) => {
    switch (action.type) {
      case 'CREATE_FAKE_OR_NOT_SUCCESS':
        
        return {
          ...state,
            quizList:action.formData 
        };
      case 'CREATE_FAKE_OR_NOT_ERROR':
      
        return state;
      default:
        return state;
    }
  };
  
  export default fakeOrNotReducer;
const initState = {
    quizList:[]
  };
  
  const kaunReducer = (state = initState, action) => {
    switch (action.type) {
      case 'CREATE_KAUN_SUCCESS':
        
        return {
          ...state,
            quizList:action.formData 
        };
      case 'CREATE_KAUN_ERROR':
      
        return state;
      default:
        return state;
    }
  };
  
  export default kaunReducer;
const initState = {
    quizList:[]
  };
  
  const daamSahiHaiReducer = (state = initState, action) => {
    switch (action.type) {
      case 'CREATE_DAAM_SAHI_HAI_SUCCESS':
        
        return {
          ...state,
            quizList:action.formData 
        };
      case 'CREATE_DAAM_SAHI_HAI_ERROR':
      
        return state;
      default:
        return state;
    }
  };
  
  export default daamSahiHaiReducer;
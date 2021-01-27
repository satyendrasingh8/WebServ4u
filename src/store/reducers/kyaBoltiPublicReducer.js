const initState = {
    quizList:[]
  };
  
  const kyaBoltiPublicReducer = (state = initState, action) => {
    switch (action.type) {
      case 'CREATE_KYA_BOLTI_PUBLIC_SUCCESS':
        
        return {
          ...state,
            quizList:action.formData 
        };
      case 'CREATE_KYA_BOLTI_PUBLIC_ERROR':
      
        return state;
      default:
        return state;
    }
  };
  
  export default kyaBoltiPublicReducer;
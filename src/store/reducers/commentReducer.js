const initState = {
    commentList:[]
  };
  
  const commentReducer = (state = initState, action) => {
    switch (action.type) {
      case 'CREATE_COMMENT_SUCCESS':
        
        return {
          ...state,
            commentList:action.comment 
        };
      case 'CREATE_COMMENT_ERROR':
      
        return state;
      default:
        return state;
    }
  };
  
  export default commentReducer;
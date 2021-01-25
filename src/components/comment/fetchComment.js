import React, { Component } from 'react';
import FetchCommentSummary from './fetchCommentSummary';
import db from '../../config/firebase'
import CommentPagination from '../pagination/commentPagination';

class FetchComment  extends Component {
   
    state={
        comments:[],
        currentPageC: 1,
        postsPerPageC: 5,
    }
  

    componentDidMount(){
        db.collection("comments").orderBy('createdAt','desc')
        .onSnapshot(querySnapshot=> {
          const comments = [];
            querySnapshot.docs.map(doc => {
              const data = doc.data();
                comments.push(data);
            });
            this.setState({
              comments:comments
            })
          
        });
      
      }
  


    render() {
        const {currentPageC, postsPerPageC, comments} = this.state;

     // comment section
  const indexOfLastPostC = currentPageC * postsPerPageC;
  const indexOfFirstPostC = indexOfLastPostC - postsPerPageC;
  const currentComments = comments.slice(indexOfFirstPostC, indexOfLastPostC);

  const paginateC = pageNum => this.setState({ currentPageC: pageNum });

  const nextPageC = () => this.setState({ currentPageC: currentPageC + 1 });

  const prevPageC = () => this.setState({ currentPageC: currentPageC - 1 });


    return(
        <div>
         { currentComments && Array.from(currentComments).map((data)=> {
          return (
              <div> 
               <FetchCommentSummary data={data} />
                  </div>
          )
         }) }
          <CommentPagination postsPerPage={postsPerPageC} totalPosts={comments.length} paginate={paginateC} nextPage={nextPageC} prevPage={prevPageC} />
        </div>
           );
}  }

export default FetchComment
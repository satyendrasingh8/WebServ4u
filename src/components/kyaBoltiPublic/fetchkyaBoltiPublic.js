import React, { Component } from 'react';
import db from '../../config/firebase'
import QuizPagination from '../pagination/quizPagination';
import FetchKyaBoltiPublicSummary from './fetchKyaBoltiPublicSummary';



class FetchKyaBoltiPublic extends Component {
 
   state={
      questions:[],
      currentPage: 1,
      postsPerPage: 1,
     
    }
    
    componentDidMount() {
    
      this.setState({ loading: true });
      db.collection("kyaBoltiPublic").orderBy('createdAt','desc')
      .onSnapshot(querySnapshot=> {
        const questions = [];
          querySnapshot.docs.map(doc => {
            const data = doc.data();
              questions.push(data);
          });
          this.setState({
            questions:questions
          })
        
      });
      this.setState({ loading: false });
    }


   render(){

      const {currentPage, postsPerPage, questions} = this.state;
    // posts section

    
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = questions.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNum => this.setState({ currentPage: pageNum });

  const nextPage = () => this.setState({ currentPage: currentPage + 1 });

  const prevPage = () => this.setState({ currentPage: currentPage - 1 });


    return(
 <div>

  {currentPosts && Array.from(currentPosts).map((data)=> {
   return (
       <div> 
        <FetchKyaBoltiPublicSummary data={data} />
        
           </div>
   )
  }) }
   <QuizPagination postsPerPage={postsPerPage} totalPosts={questions.length} paginate={paginate} nextPage={nextPage} prevPage={prevPage} />
 </div>
    );
}}

export default FetchKyaBoltiPublic;
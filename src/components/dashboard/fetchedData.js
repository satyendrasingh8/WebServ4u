import React, { Component } from 'react';
import FetchedDataSummary from './fetchedDataSummary';
import firebase from '../../config/firebase'
import QuizPagination from '../pagination/quizPagination';
const content = require('../../dummyData/home.json')

class FetchedQuiz extends Component {
 
   state={
      questions:[],
      currentPage: 1,
      postsPerPage: 8,
     
    }
    
    componentDidMount() {
    
      this.setState({ loading: true });
      const db = firebase.firestore();
     db.collection("createQuiz").orderBy('createdAt','desc')
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
  
  
  <span style={{color:"red"}}> flipkart trivia today answer updated at
     { this.props.curDate} 12:05am </span>
  {currentPosts && Array.from(currentPosts).map((data)=> {
   return (
       <div> 
        <FetchedDataSummary data={data} curDate={this.props.curDate} />
        
           </div>
   )
  }) }
   <QuizPagination postsPerPage={postsPerPage} totalPosts={questions.length} paginate={paginate} nextPage={nextPage} prevPage={prevPage} />
   
   
 </div>
    );
}}

export default FetchedQuiz
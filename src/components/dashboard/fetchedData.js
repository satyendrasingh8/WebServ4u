import React, { Component } from 'react';
import FetchedDataSummary from './fetchedDataSummary';
import firebase from '../../config/firebase'
import QuizPagination from '../pagination/quizPagination';
import MetaDecorator from "../../utils/metaDecorator"
const content = require('../../dummyData/home.json')

class FetchedQuiz extends Component {
 
   state={
      questions:[],
      currentPage: 1,
      postsPerPage: 1,
     
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
   <MetaDecorator title="flipkart quiz answers today, guess what" description="webserv4u.com provide daily trivia quiz 
   answers in first instance by playing these quiz answers correctly you must win awesome prize." />
   <MetaDecorator title="flipkart Quiz time Guess what answers today" description=" Here all right
    Flipkart Daily Trivia Answers Today 1 
    are given. Start Playing Quiz by clicking on Start Quiz Button." />
  
  {currentPosts && Array.from(currentPosts).map((data)=> {
   return (
       <div> 
        <FetchedDataSummary data={data} />
        
           </div>
   )
  }) }
   <QuizPagination postsPerPage={postsPerPage} totalPosts={questions.length} paginate={paginate} nextPage={nextPage} prevPage={prevPage} />
   <MetaDecorator title="flipkart daily trivia Quiz answers today" description="Flipkart Daily Trivia quiz answers. Win free vouchers and 
   super coins by answering all five questions. Get the latest Flipkart quiz answers" />
   <MetaDecorator title="flipkart daily trivia answers today" description="Flipkart daily trivia quiz is available under the Games
    zone section and comprises five questions that are based on current events and general ..." />
 </div>
    );
}}

export default FetchedQuiz
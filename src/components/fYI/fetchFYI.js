import React, { Component } from 'react';
import firebase from '../../config/firebase'
import MetaDecorator from '../../utils/metaDecorator';
import QuizPagination from '../pagination/quizPagination';
import FetchFYISummary from './fetchFYISummary';



class FetchFYI extends Component {
 
   state={
      questions:[],
      currentPage: 1,
      postsPerPage: 8,
     
    }
    
    componentDidMount() {
    
      this.setState({ loading: true });
      const db = firebase.firestore();
      db.collection("fYI").orderBy('createdAt','desc')
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
<MetaDecorator title={`flipkart FYI Quiz ${this.props.curDate}`} description=" webserv4u is a topmost blogging site that will provide fast & correct answers. FYI also known as Flipkart GK Badhega Prize Jeetega Quiz. " />
<MetaDecorator title={`flipkart FYI webserv4u ${this.props.curDate}`} description=" By answering them you have to get some relevant prize,coupons,gift or super coins by regular participation in daily quiz.Make sure you have to follow our official Telegram channel to get daily imediate answers for each Quiz " />
  {currentPosts && Array.from(currentPosts).map((data)=> {
   return (
       <div> 
        <FetchFYISummary data={data} curDate={this.props.curDate}/>
        
           </div>
   )
  }) }
   <QuizPagination postsPerPage={postsPerPage} totalPosts={questions.length} paginate={paginate} nextPage={nextPage} prevPage={prevPage} />
 </div>
    );
}}

export default FetchFYI;
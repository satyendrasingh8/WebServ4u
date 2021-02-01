import React, { Component } from 'react';
import firebase from '../../config/firebase'
import MetaDecorator from '../../utils/metaDecorator';
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
      const db = firebase.firestore();
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
 <MetaDecorator title='flipkart kya bolti public winners' description=" To participate in the Flipkart Kya Bolti Public Quiz, you need to follow folllowing instructions as mention below in webserv4u.com " />
    <MetaDecorator title='kya bolti public answer today ! episode' description="Hosted by Maniesh Paul in season 2 as well, Kya Bolti Public is a poll-based show ... The winners
     of this game show get big prizes every episode from Flipkart. " />
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
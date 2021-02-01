import React, { Component } from 'react';
import firebase from '../../config/firebase'
import MetaDecorator from '../../utils/metaDecorator';
import QuizPagination from '../pagination/quizPagination';
import FetchKaunSummary from './fetchKaunSummary';



class FetchKaunWhoDidIt extends Component {
 
   state={
      questions:[],
      currentPage: 1,
      postsPerPage: 1,
     
    }
    
    componentDidMount() {
    
      this.setState({ loading: true });
      const db = firebase.firestore();
      db.collection('kaun').orderBy('createdAt','desc')
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
  <MetaDecorator title='' description="You can play the Flipkart Kaun Who did it Play and win Vouchers, Gems & More. If You are looking for fast and right Flipkart quiz answers please visit at 
   our secure and trusted website https://webserv4u.com if any query please contact with us and please keep supporting us " />
   <MetaDecorator title='' description=" Flipkart Kaun Who Did It Quiz answers today: win boAt Airdopes Bluetooth headset, Supercoins, and more - Quiz - webserv4u.com ... " />
  {currentPosts && Array.from(currentPosts).map((data)=> {
   return (
       <div> 
        <FetchKaunSummary data={data} />
        
           </div>
   )
  }) }
   <QuizPagination postsPerPage={postsPerPage} totalPosts={questions.length} paginate={paginate} nextPage={nextPage} prevPage={prevPage} />
 </div>
    );
}}

export default FetchKaunWhoDidIt;
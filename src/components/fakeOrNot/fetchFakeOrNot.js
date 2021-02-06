import React, { Component } from 'react';
import firebase from '../../config/firebase'
import MetaDecorator from '../../utils/metaDecorator';
import QuizPagination from '../pagination/quizPagination';
import FetchFakeOrNotSummary from './fetchFakeOrNotSummary';


class FetchFakeOrNot extends Component {
 
   state={
      questions:[],
      currentPage: 1,
      postsPerPage: 8,
     
    }
    
    componentDidMount() {
    
      this.setState({ loading: true });
      const db = firebase.firestore();
      db.collection("fakeOrNot").orderBy('createdAt','desc')
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
<MetaDecorator title={`flipkart fake or not today answer ${this.props.curDate}`} description='Flipkart Fake or Not today
 Answers... Dear viewers Fake or Not Fake is live now.You will get here fastest correct answers with the trust of webserv4u.com' />
   <MetaDecorator title={`flipkart fake or not fake ${this.props.curDate}`} description='flipkart fake or not fake
   is a 2020 Indian web show currently hosted by stand-up comedian and Youtuber Inder Sahani. 
   The show is a Flipkart Video original and was launched on Flipkart App on 6th July 2020. ... 
   The first season of Fake or Not was 
   hosted by Indian actress and comedian Mallika Dua who played as News anchor, Mythika Dutt.' />
  {currentPosts && Array.from(currentPosts).map((data)=> {
   return (
       <div> 
        <FetchFakeOrNotSummary data={data} curDate={this.props.curDate}/>
        
           </div>
   )
  }) }
   <QuizPagination postsPerPage={postsPerPage} totalPosts={questions.length} paginate={paginate} nextPage={nextPage} prevPage={prevPage} />
 </div>
    );
}}

export default FetchFakeOrNot;
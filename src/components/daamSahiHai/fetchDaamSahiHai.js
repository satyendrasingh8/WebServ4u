import React, { Component } from 'react';
import firebase from '../../config/firebase'
import QuizPagination from '../pagination/quizPagination';
import FetchDaamSahiHaiSummary from './fetchDaamSahiHaiSummary';

class FetchDaamSahiHai extends Component {
 
   state={
      questions:[],
      currentPage: 1,
      postsPerPage: 8,
     
    }
    
    componentDidMount() {
    
      this.setState({ loading: true });
      const db = firebase.firestore();
     const getData = async() =>{
      db.collection("daamSahiHai").orderBy('createdAt','desc')
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
    
     }
     getData()
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
        <FetchDaamSahiHaiSummary data={data} curDate={this.props.curDate} />
        
           </div>
   )
  }) }
   <QuizPagination postsPerPage={postsPerPage} totalPosts={questions.length} paginate={paginate} nextPage={nextPage} prevPage={prevPage} />
 </div>
    );
}}

export default FetchDaamSahiHai;
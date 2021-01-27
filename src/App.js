import './App.css';
import HeaderNavbar from './layout/navbar'
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Dashboard from './components/dashboard/dashboard';
import CreateQus from './components/createPost/createQuestion';
import Footer from './layout/footer';
import About from './pages/about';
import FAQ from './pages/faq';
import Contact from './pages/contact';
import Disclaimer from './pages/disclaimer';
import PrivacyPolicy from './pages/privacyPolicy';
import TermsAndCondition from './pages/termAndCondition';
import NotFound from './pages/notFound';
import TriviaQuiz from './components/dashboard/triviaQuiz';
import FakeOrNot from './components/fakeOrNot/fakeOrNot';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <HeaderNavbar />
          <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/createBlog' component={CreateQus} />
          <Route  path='/about' component={About} />
          <Route  path='/flipkart-daily-trivia-quiz' component={TriviaQuiz} />
          <Route  path='/flipkart-fake-or-not-quiz' component={FakeOrNot} />
          <Route  path='/faq' component={FAQ} />
          <Route  path='/contact' component={Contact} />
          <Route  path='/disclaimer' component={Disclaimer} />
          <Route  path='/privacyPolicy' component={PrivacyPolicy} />
          <Route  path='/termsAndCondition' component={TermsAndCondition} />
          <Route   component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

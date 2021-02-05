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
import CreateFakeOrNot from './components/fakeOrNot/createPost/createFakeOrNot';
import KyaBoltiPublic from './components/kyaBoltiPublic/kyaBoltiPublic';
import CreateKyaBoltiPublic from './components/kyaBoltiPublic/createPost/createKyaBoltiPublic';
import DaamSahiHai from './components/daamSahiHai/daamSahiHai';
import CreateDaamSahiHai from './components/daamSahiHai/createPost/createDaamSahiHai';
import FYI from './components/fYI/fYI';
import CreateFYI from './components/fYI/createPost/createFYI';
import CreateKaun from './components/kaun/createPost/createKaun';
import Kaun from './components/kaun/kaun';
import SignIn from './layout/auth/SignIn'
import {AuthProvider} from './layout/auth/authContext'
import PrivateRoute from './layout/auth/privateRoute'





class App extends Component {

  render() {
    return (
      <AuthProvider>
      <BrowserRouter>
        <div className="App">
          <HeaderNavbar />
          <Switch>
          <Route exact path='/' component={Dashboard} />
          <PrivateRoute path='/createTrivia'  > 
          <CreateQus />
          </PrivateRoute>
          <PrivateRoute path='/createKyaBoltiPublic'  > <CreateKyaBoltiPublic/> </PrivateRoute>
          <PrivateRoute path='/createFakeOrNot'  > <CreateFakeOrNot /> </PrivateRoute>
          <PrivateRoute path='/createDaamSahiHai'  ><CreateDaamSahiHai /> </PrivateRoute>
          <PrivateRoute path='/createFYI'  > <CreateFYI /> </PrivateRoute>
          <PrivateRoute path='/createKaun' > <CreateKaun /> </PrivateRoute>
          <Route  path='/about' component={About} />
          <Route  path='/signin' >
            <SignIn />
             </Route>

          <Route  path='/flipkart-trivia-today-answers' component={TriviaQuiz} />
          <Route  path='/flipkart-fake-or-not-quiz' component={FakeOrNot} />
          <Route  path='/flipkart-kya-bolti-public-quiz' component={KyaBoltiPublic} />
          <Route  path='/flipkart-daam-sahi-hai-quiz' component={DaamSahiHai} />
          <Route  path='/flipkart-for-your-infromation-quiz' component={FYI} />
          <Route  path='/flipkart-kaun-who-did-it-quiz' component={Kaun} />
          
          <Route  path='/faq' component={FAQ} />
          <Route  path='/contact' component={Contact} />
          <Route  path='/disclaimer' component={Disclaimer} />
          <Route  path='/privacyPolicy' component={PrivacyPolicy} />
          <Route  path='/termsAndCondition' component={TermsAndCondition} />
          
          </Switch>
          <Footer />
        </div>
      </BrowserRouter></AuthProvider>
    );
  }
}

export default App;

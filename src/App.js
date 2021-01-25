import './App.css';
import HeaderNavbar from './layout/navbar'
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Dashboard from './components/dashboard/dashboard';
import CreateQus from './components/createPost/createQuestion';
import Footer from './layout/footer';
import About from './pages/about';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <HeaderNavbar />
          <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/createBlog' component={CreateQus} />
          <Route exact path='/about' component={About} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

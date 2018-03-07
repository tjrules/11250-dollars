import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/partials/Header';
import Footer from './components/partials/Footer';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div className="adaquotes">
        <Header />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;

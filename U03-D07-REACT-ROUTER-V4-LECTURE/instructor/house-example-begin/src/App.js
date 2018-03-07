import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom'; 
import Home from './components/Home';
import House from './components/House';
import Room from './components/Room';
import Header from './components/Header';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <p>hello world</p>
          <main>
            {/*switch will  return the component found at the first matching route*/}
            <Switch>
              <Route path="/house/:rooms" component={Room}/>
              <Route path="/house" component={House} />
              <Route path="/" component={Home} />
            </Switch>
          </main>
      </div>
    );
  }
}

export default App;

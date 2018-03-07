import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const todos = [
  {text: 'Buy strawberries', dateAdded: new Date('2017-08-22')},
  {text: 'Go to they gym', dateAdded: new Date('2017-08-25')},
  {text: 'Study React all night', dateAdded: new Date('2017-08-26')},
  {text: 'Register car', dateAdded: new Date('2017-08-28')},
  {text: 'Do writing... you always negelct your writing!', dateAdded: new Date('2017-08-30')}
];

ReactDOM.render(<App todos={todos}/>, document.getElementById('root'));
registerServiceWorker();

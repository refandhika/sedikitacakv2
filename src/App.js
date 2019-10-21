import React from 'react';
import './styles/App.css';
import Nav from './Nav.js';
import Main from './Main.js';
import Copyright from './Copyright.js';

import {
  BrowserRouter as Router,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
	<header className="App-header">  
          <Nav />
	</header>
	<main className="App-main">
	  <Main />
	</main>
	<footer className="App-footer">
	  <Copyright />
	</footer>
      </Router>
    </div>
  );
}

export default App;

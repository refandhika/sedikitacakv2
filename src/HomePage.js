import React from 'react';
import './styles/HomePage.css';

import logo from './images/8709583.png';

import ChangingText from './ChangingText.js';

function HomePage() {
  return (
    <div className="HomePage">
      <div className="Content">
	<div className="Home-intro">
	  <div className="Home-image">
	    <img src={logo}
	      alt="" />
	  </div>
	  <div className="Home-info">
	    <div className="Info-name">Hi! I'm <span>Refa Andhika</span></div>
	    <ChangingText />
	  </div>
	</div>
      </div>
    </div>
  );
}

export default HomePage;

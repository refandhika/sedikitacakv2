import React from 'react';
import Typed from 'typed.js';

import goImg from './images/golang.png';

import './styles/About.css';

const stuff = [
  {}
]

class AboutPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const options = {
      stringsElement: '#AboCollection',
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1000,
      loop: true,
      showCursor: false
    }

    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {
    return (
      <div className="AboutPage">
        <section className="About-sect">
	  <div className="About-head">
            <div className="About-coll" id="AboCollection">
	      <blockquote>"A man is a mystery."</blockquote>
	      <blockquote>"Nothing known until an encounter."</blockquote>
	      <blockquote>"Nothing known until a conversation."</blockquote>
	      <blockquote>"Nothing known until an interaction."</blockquote>
	      <blockquote>"Learn and reveal his interest."</blockquote>
	    </div>
	    <div className="About-typed" ref={(el)=>{this.el=el;}}>
	    </div>
	  </div>
        </section>
	<section className="About-title invert">
	  <div className="About-title-cont">
	    Some Stuff I Like
	  </div>
	</section>
      </div>
    );
  }
}

export default AboutPage;

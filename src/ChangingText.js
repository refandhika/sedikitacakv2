import React from 'react';
import Typed from 'typed.js';

class ChangingText extends React.Component {
  componentDidMount() {
    const options = {
      stringsElement: '#TextCollection',
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      backDelay: 2000,
      showCursor: false
    }

    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {
    return(
      <div className="Info">
        <div className="Info-coll" id="TextCollection">
          <p>A Web Developer</p>
	  <p>A Full Stack Mercenaries</p>
	  <p>A Music Producer</p>
	  <p>A Computer Enthusiast</p>
	  <p>A Content Writer</p>
	  <p>A So-so Gamer</p>
	  <p>An Introverted Friend</p>
	  <p>A Story Lover</p>
        </div>
        <div className="Info-occu" ref={(el)=>{this.el=el;}}>
        </div>
      </div>
    );
  }
}

export default ChangingText;

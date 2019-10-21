import React from 'react';
import Typed from 'typed.js';

import goImg from './images/golang.png';

import './styles/Skill.css';

const proSkill = [
  {}
]

const addSkill = [
  {}
]

class SkillPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const options = {
      stringsElement: '#SkiCollection',
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
      <div className="SkillPage">
        <section className="Skill-sect">
	  <div className="Skill-head">
            <div className="Skill-coll" id="SkiCollection">
	      <blockquote>"Skill is part of a man."</blockquote>
	      <blockquote>"Man choose his pathway."</blockquote>
	      <blockquote>"The path honed a man abilities."</blockquote>
	      <blockquote>"As man set the limit, the skill will rise."</blockquote>
	    </div>
	    <div className="Skill-typed" ref={(el)=>{this.el=el;}}>
	    </div>
	  </div>
        </section>
	<section className="Skill-sect invert">
	    <div className="Experience-cont">
	      <div className="Experience-det">
	        <div className="Experience-left">
	        </div>
	        <div className="Experience-right">
	        </div>
	      </div>
	    </div>
	</section>
      </div>
    );
  }
}

export default SkillPage;

import React from 'react';
import Typed from 'typed.js';

import wpImg from './images/wordpress.png';
import htmImg from './images/html.png';
import cssImg from './images/css.png';
import bsImg from './images/bootstrap.png';
import jsImg from './images/javascript.jpg';
import jqImg from './images/jquery.png';
import reaImg from './images/react.png';
import phpImg from './images/php.png';
import pyImg from './images/python.png';
import goImg from './images/golang.png';
import myImg from './images/mysql.png';
import awsImg from './images/aws.png';
import lmImg from './images/lmms.png';
import audImg from './images/audacity.png';
import inkImg from './images/inkscape.png';
import giImg from './images/gimp.png';
import lwImg from './images/lightworks.png';

import './styles/Skill.css';

import StarRate from './StarRate.js';

const skillData = [
  {
    id: 1,
    title: "Front End - Web Developer",
    desc: "How a site shown to public. This all used to make everything than seen on the web.",
    skills: [
      {
	id: 1,
	name: "Wordpress",
	img: wpImg,
	desc: "Most renown Content Management System in the world. Versatile enough to be used either as static page, blog, or e-commerce.",
	rate: "5",
	hidden: false
      },
      {
	id: 2,
	name: "HTML",
	img: htmImg,
	desc: "Basic of basic for web development. It's fundamental for web developers.",
	rate: "5",
	hidden: false
      },
      {
        id: 3,
	name: "CSS",
	img: cssImg,
	desc: "Make site with style. Literally. With css, no more plain white background with default font.",
	rate: "5",
	hidden: false
      },
      {
	id: 4,
	name: "Bootstrap",
	img: bsImg,
	desc: "Was using Bootstrap as CSS framework for fast easy styling. But not a fan of huge chunk of styling frame work nowadays.",
	rate: "5",
	hidden: true
      },
      {
	id: 5,
	name: "Javascript",
	img: jsImg,
	desc: "Add interaction and animation to your site. And it's pretty much can be used every day.",
	rate: "3",
	hidden: false
      },
      {
	id: 6,
	name: "jQuery",
	img: jqImg,
	desc: "Wordpress used jQuery as their javascript framework. So i use it in daily basis.",
	rate: "4",
	hidden: false
      },
      {
	id: 7,
	name: "React",
	img: reaImg,
	desc: "Easily overrated front-end framework. It's hard on the first start but you'll get the grip soon enough.",
	rate: "3",
	hidden: true
      }
    ],
    hidden: false
  },
  {
    id: 2,
    title: "Back End - Web Developer",
    desc: "What happen behind the web. All thouse calculating and data analyzing or server or storage.",
    skills: [
      {
	id: 1,
	name: "PHP",
	img: phpImg,
	desc: "Old skool back end language. Goes way back from my first time developing.",
	rate: "5",
	hidden: false
      },
      {
	id: 2,
	name: "Python",
	img: pyImg,
	desc: "Back end language usually used for handling data analyzing.",
	rate: "4",
	hidden: false
      },
      {
        id: 3,
	name: "Golang",
	img: goImg,
	desc: "Proven fast back end language. I'm using it on some project.",
	rate: "4",
	hidden: true
      },
      {
	id: 4,
	name: "MySQL",
	img: myImg,
	desc: "A database system goes hand-in-hand with Wordpress. Highly used by everyone.",
	rate: "4",
	hidden: false
      },
      {
        id: 5,
	name: "AWS",
	img: awsImg,
	desc: "Mainly using EBS, RDS, and S3. Used to maintain a server here for a year.",
	rate: "4",
	hidden: true
      }
    ],
    hidden: false
  },
  {
    id: 3,
    title: "Music Producer",
    desc: "Yeah i love music. It's a hobby. But, i do hope it become more than that.",
    skills: [
      {
	id: 1,
	name: "LMMS",
	img: lmImg,
	desc: "Free DAW best for producing, especially for poor man.",
	rate: "4",
	hidden: false
      },
      {
	id: 2,
	name: "Audacity",
	img: audImg,
	desc: "Free sound manipulation and recorder. Decent for sound mastering.",
	rate: "4",
	hidden: false,
      }
    ],
    hidden: true
  },
  {
    id: 4,
    title: "Others",
    desc: "Stuffs i use occasionally. Not just one time, but time to time.",
    skills: [
      {
	id: 1,
	name: "Inkscape",
	img: inkImg,
	desc: "Poor man Corel Draw. Decent vector image creator.",
	rate: "3",
	hidden: false
      },
      {
	id: 2,
	name: "GIMP",
	img: giImg,
	desc: "Poor man Photoshop. Or linux photoshop.",
	rate: "3",
	hidden: false
      },
      {
	id: 3,
	name: "Lightworks",
	img: lwImg,
	desc: "Poor man Premier. Powerfull enough for simple video editing, but kinda confusing.",
	rate: "3",
	hidden: false
      }
    ],
    hidden: true
  }


]

class SkillPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sectShow: false
    }

    this.toggleHidden = this.toggleHidden.bind(this);
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

  toggleHidden() {
    this.setState({
      sectShow: !this.state.sectShow
    });
  }

  render() {
    const sectShow = this.state.sectShow;

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
	{ skillData.map((data) => {
	  let cn = "Skill-sect";
	  if(data.id % 2){
	    cn = cn + " invert";
	  }

	  let sectStyle = {
	    display: "none",
	  };
	  if(sectShow || !data.hidden){
	    sectStyle = {
	      display: "block",
	    }
	  }

	  return (
	    <section key={data.id}
	      className={cn}
	      style={sectStyle}>
	      <div className="Skill-cont">
		<div className="Skill-title">
		  {data.title}
		</div>
		<div className="Skill-desc">
		  {data.desc}
		</div>
	        <div className="Skill-det">
		  { data.skills.map((skill) => {
		    let cn = "Skill-item";
		
		    let itemStyle = {
		      display: "none"
		    }
		    if(sectShow || !skill.hidden){
	    	      itemStyle = {
	      		display: "inline-flex"
	    	      }
	  	    }
    
		    return(
		      <div key={skill.id}
		        className={cn}
			style={itemStyle}>
		        <div className="Skill-item-img">
			  <img src={skill.img} alt="" />
		        </div>
		        <div className="Skill-item-det">
			  <div className="Skill-item-title">
			    {skill.name}
			  </div>
			  <div className="Skill-item-desc">
			    {skill.desc}
		 	  </div>
			  <div className="Skill-item-rate">
			    <StarRate rate={skill.rate} />
			  </div>
		        </div>
		      </div>
		    );
		  })}
	        </div>
	      </div>
	    </section>
	  );
	  }
	)}
	<section className="Skill-more invert">
	  <p>
	    {
	      !sectShow ? 
	      "I got more skill in my sleeve. But i currently not using them professionally."
	      :
	      "Well you see more of skill i used outside my professional works. There is some more, but i decide it was old skill or some stuff i've done but never used in a long time."
	    }
	  </p>
	  <button onClick={this.toggleHidden}>
	    { !sectShow ? "Just show me!" : "OK, now hide it." }
	  </button>
	</section>
      </div>
    );
  }
}

export default SkillPage;

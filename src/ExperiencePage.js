import React from 'react';
import Typed from 'typed.js';

import shopeeImg from './images/shopee.png';
import boomImg from './images/boombastis.png';
import muveraImg from './images/muvera.png';
import praisImg from './images/praisindo.png';

import './styles/Experience.css';

import ExpPageInfo from './ExpPageInfo.js';

const expData = [
  {
    expId: 1,
    title: "Shopee",
    link: "https://shopee.co.id",
    desc: "Biggest E-Commerce in South East Asia. Child company of SEA Group. And sibling of Garena. Can't miss the orange theme color.",
    pos: {
      title: "Web Engineer",
      time: "2019 - Current"
    },
    tags: [
      "Wordpress",
      "HTML",
      "CSS",
      "Javascript",
      "OOP",
      "Python"
    ],
    img: shopeeImg,
    stat: "Full Time"
  },
  {
    expId: 2,
    title: "Boombastis.com",
    link: "https://boombastis.com",
    desc: "Online media website which aiming to create viral contents. Content created about latest fun facts and memes around the world.",
    pos: {
      title: "Wordpress Developer",
      time: "2017 - 2019"
    },
    tags: [
      "Wordpress",
      "HTML",
      "CSS",
      "Javascript",
      "Material Design Lite",
      "AWS"
    ],
    img: boomImg,
    stat: "Full Time"
  },
  {
    expId: 3,
    title: "Muvera.co",
    link: "https://muvera.co",
    desc: "Data analytics start-up which aiming to gather all media data and analyze those data into useful insight.",
    pos: {
      title: "Full Stack Developer",
      time: "2016"
    },
    tags: [
      "Codeigniter",
      "HTML",
      "CSS",
      "Javascript",
      "AWS",
      "Python"
    ],
    img: muveraImg,
    stat: "Full Time"
  },
  {
    expId: 4,
    title: "Praisindo",
    link: "http://praisindo",
    desc: "Mutual funds fintech which developing company specific product, product consultation, and product implementation for Integrated Investment Management.",
    pos: {
      title: "UI/UX Researcher",
      time: "2014"
    },
    tags: [
      "HTML",
      "PHP",
      "CSS",
      "Javascript"
    ],
    img: praisImg,
    stat: "Intern"
  }
]

class ExperiencePage extends React.Component {
  componentDidMount() {
    const options = {
      stringsElement: '#ExpCollection',
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
      <div className="ExperiencePage">
        <section className="Experience-sect">
	  <div className="Experience-head">
            <div className="Experience-coll" id="ExpCollection">
	      <blockquote>"Experience is part of a story from a man."</blockquote>
	      <blockquote>"A journey where chapter written."</blockquote>
	      <blockquote>"A place where friends and rivals revealed."</blockquote>
	      <blockquote>"And a method where skill achieved."</blockquote>
	    </div>
	    <div className="Experience-typed" ref={(el)=>{this.el=el;}}>
	    </div>
	  </div>
        </section>
	{ expData.map((data) =>
	  <section className={data.expId % 2 ? "Experience-sect invert" : "Experience-sect"}>
	    <div className="Experience-cont">
	      <div className="Experience-det">
	        <div className="Experience-left">
	          {
		    data.expId % 2 ?
		      <img src={data.img} 
			alt="" />
		      :
		      <ExpPageInfo data={data} />
		  }
	        </div>
	        <div className="Experience-right"> 
		  {
		    data.expId % 2 ?
		      <ExpPageInfo data={data} />
		      :
		      <img src={data.img} 
			alt="" />
		  }
	        </div>
	      </div>
	      <div className="Experience-stat">{data.stat}</div>
	    </div>
	  </section>
        )}
      </div>
    );
  }
}

export default ExperiencePage;

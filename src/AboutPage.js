import React from 'react';
import Typed from 'typed.js';

import owImg from './images/overwatch.png';
import marImg from './images/marvel.png';
import rmImg from './images/rm.png';
import opImg from './images/onepiece.png';
import tarImg from './images/tar.png';
import bmImg from './images/blackmirror.png';

import './styles/About.css';

import AboutSectColor from './AboutSectColor.js';
import ATWSection from './ATWSection.js';

const stuffs = [
  {
    aboutId: 1,
    title: "Overwatch",
    link: "https://playoverwatch.com/en-us/",
    desc: "One of my dream comes true. A world where its like DotA while there is heroes with certain abilities but its in first person. Where tactics and shooting your way out is the way.",
    img: owImg,
    bgColor: "#eeeeee",
    fontColor: "#222222",
    category: "Games"
  },
  {
    aboutId: 2,
    title: "Marvel",
    link: "https://www.marvel.com/",
    desc: "Love the concept of heroes or anyone with superhuman abilities. Been into it since 2012, so i keep going with it. Doesn't hate DC at all. Its just they one step too late to expand.",
    img: marImg,
    bgColor: "#192844",
    fontColor: "#ffffff",
    category: "Movies & TV Series"
  },
  {
    aboutId: 3,
    title: "Running Man",
    link: "https://programs.sbs.co.kr/enter/runningman/",
    desc: "Starting as curiousity from my dorm mate. Got laugh so hard when i first watch it. The show has been a rundown lately. But got back alive with additional members. Still trying to keep up with it!",
    img: rmImg,
    bgColor: "#ffff00",
    fontColor: "#222222",
    category: "TV Shows"
  },
  {
    aboutId: 4,
    title: "One Piece",
    link: "https://www.viz.com/one-piece",
    desc: "I love superpower concept the most. And they bring the second concept i most love too, which is pirates! What did you expect my response from it?",
    img: opImg,
    bgColor: "#407def",
    fontColor: "#222222",
    category: "Manga"
  },
  {
    aboutId: 5,
    title: "The Amazing Race",
    link: "https://www.cbs.com/shows/amazing_race/",
    desc: "Aside from the race for 10 to 12 teams. The show keeps me remember that this world had so many beauty to miss, so many places can be reach, and so many culture to experience.",
    img: tarImg,
    bgColor: "#092d01",
    fontColor: "#ffffff",
    category: "TV Shows"
  },
  {
    aboutId: 6,
    title: "Black Mirror",
    link: "https://www.netflix.com/id-en/title/70264888",
    desc: "A series of different stories from different people which had problem with currently unexisting technology. And story telling of what if a technology can affect society if ever founded.",
    img: bmImg,
    bgColor: "#222222",
    fontColor: "#ffffff",
    category: "TV Series"
  }
]

const aroundTheWeb = [
  {
    atwId: 1,
    aka: "Refa Andhika",
    socials: [
      {
        sosId: 1,
	link: "https://github.com/refandhika",
	icon: "github"
      },
      {
	sosId: 2,
	link: "https://www.facebook.com/refa.andhika",
	icon: "facebook-f"
      },
      {
        sosId: 3,
	link: "https://www.linkedin.com/in/refa-andhika-aa203a94/",
	icon: "linkedin-in"
      },
      {
	sosId: 4,
	link: "https://www.instagram.com/refa.andhika/",
	icon: "instagram"
      }
    ]
  },
  {
    atwId: 2,
    aka: "Stave",
    socials: [
      {
	sosId: 1,
	link: "https://steamcommunity.com/id/stave-id/",
	icon: "steam-symbol"
      },
      {
	sosId: 2,
	link: "",
	icon: "battle-net"
      }
    ]
  },
  {
    atwId: 3,
    aka: "st.ave/St.Ave",
    socials: [
      {
        sosId: 1,
	link: "https://twitter.com/stave_id",
	icon: "twitter"
      },
      {
	sosId: 2,
	link: "https://soundcloud.com/st-ave", 
	icon: "soundcloud"
      },
      {
	sosId: 3,
	link: "https://open.spotify.com/artist/5jyQIfUfnxYsyXuDrCTidU",
	icon: "spotify"
      }
    ]
  }
]

class AboutPage extends React.Component {
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
	{ stuffs.map((data) =>
	  <AboutSectColor key={data.aboutId}
	    data={data} />
	)}
	<section className="About-atw">
	  <div className="About-atw-cont">
	    <p>
	      Find Me Around the Web
	    </p>
	    { aroundTheWeb.map((data) =>
	      <ATWSection key={data.atwId}
		data={data} />
	    )}
	  </div>
	</section>
      </div>
    );
  }
}

export default AboutPage;

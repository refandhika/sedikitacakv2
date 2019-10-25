import React from 'react';

import AboutSectInfo from './AboutSectInfo.js';

class AboutSectColor extends React.Component {
  render() {
    return(
      <section className="About-sect"
	style={{backgroundColor: this.props.data.bgColor}}>
	<div className="About-cont">
	  <div className="About-left">
	    {
	      this.props.data.aboutId % 2 ?
	        <img src={this.props.data.img}
		  alt=""
		  className="About-img" />
		:
		<AboutSectInfo data={this.props.data} />
	    }
	  </div>
	  <div className="About-right"> 
	    {
	      this.props.data.aboutId % 2 ?
	        <AboutSectInfo data={this.props.data} />
	        :
	        <img src={this.props.data.img}
		  alt=""
		  className="About-img" />
	    }
	  </div>
	</div>
      </section>
    );
  }
}

export default AboutSectColor;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

class ATWSection extends React.Component {
  render() {
    const socials = this.props.data.socials;

    return(
      <div className="ATWSection">
	<p>
	  as {this.props.data.aka}
	</p>
	{ socials.map((social) => 
	  <button key={social.sosId}
	    className="FAButton">
	    <a href={social.link} target="_blank"
	      rel="noopener noreferrer">
	    <FontAwesomeIcon icon={['fab', social.icon]} inverse />
	    </a>
	  </button>
	)}
      </div>
    );
  }
}

export default ATWSection;

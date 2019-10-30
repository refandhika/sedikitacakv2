import React from 'react';

function AboutSectInfo(props) {
	console.log(props);
  return(
    <div className="About-info">
      <div className="About-name">
	<a href={props.data.link}
	  target="_blank"
	  rel="noopener noreferrer"
	  style={{color: props.data.fontColor}}>
	  {props.data.title}
	</a>
      </div>
      <div className="About-desc"
	style={{color: props.data.fontColor}}>
	{props.data.desc}
      </div>
      <div className="About-cat"
	style={{
	  color: props.data.fontColor,
	  borderColor: props.data.fontColor
	}}>
	{props.data.category}
      </div>
    </div>
  );
}

export default AboutSectInfo;

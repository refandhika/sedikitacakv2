import React from 'react';

function ExpPageInfo(props) {
  return (
    <div className="Experience-info">
      <div className="Experience-title">
	<a href={props.data.link}
	  target="_blank"
	  rel="noopener noreferrer">
	  {props.data.title}
	</a>
      </div>
      <div className="Experience-desc">
	{props.data.desc}
      </div>
      <div className="Experience-pos">
	<div className="Experience-pos-left">{props.data.pos.title}</div>
	<div className="Experience-pos-right">{props.data.pos.time}</div>
      </div>
      <div className="Experience-tag-cont">
	{props.data.tags.map((tag) => 
	  <div className="Experience-tag-item">{tag}</div>
	)}
      </div>
    </div>
  );
}

export default ExpPageInfo;

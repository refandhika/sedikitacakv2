import React from 'react';
import './styles/Copyright.css';

function Copyright() {
  const today = new Date();
  const date = today.getDate() + '/' + (today.getMonth()+1) + '/' + today.getFullYear();

  return (
    <div className="Copyright">
      <div className="Copy-left">
	  {date}
      </div>
      <div className="Copy-right">
	refandhika &copy; {today.getFullYear()}
      </div>
    </div>
  );
}

export default Copyright;

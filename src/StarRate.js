import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fas, far);

function StarRate(props) {
let star = [];

for(let i=0;i<5;i++){
  if(i<props.rate){
    star.push(<FontAwesomeIcon key={i+1} icon={['fas', 'star']} size="2x" />);
  } else {
    star.push(<FontAwesomeIcon key={i+1} icon={['far', 'star']} size="2x" />);
  }
}

return (
  <div className="StarRate">
    {star}
  </div>
);

}

export default StarRate;

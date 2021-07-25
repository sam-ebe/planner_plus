import React from 'react';

function Title({name}) {
  
  return (
    <div className="titleContainer">
      <div className="title">
        <h1>
          {name}
        </h1>
        <div className="bigDimmed">
          {name}
        </div>
      </div>
    </div>
  )
}

export default Title;

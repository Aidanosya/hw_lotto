import React from 'react';
import "./Number.css";



const Number = (props) => (
  
    <div className="number">
      <span className='ball'>{props.number}</span>
    </div>
  
);

export default Number;

import React from 'react';

const AboutContent = (props) => {
  return(
    <div>
      <p>{props.details}</p>
      <button onClick={props.handleFormToggle}>Edit</button>
    </div>
  );
}

export default AboutContent;

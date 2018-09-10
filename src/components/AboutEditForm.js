import React from 'react';

const AboutEditForm = (props) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const details = e.target.elements.details.value.trim();
    props.handleUpdateDetails(details);
  }
  return(
    <div>
      <form onSubmit={handleFormSubmit}>
        <input type='text' name='details' defaultValue={props.details}/><br/>
        <button type='submit'>Update</button>
      </form>
    </div>
  );
}

export default AboutEditForm;

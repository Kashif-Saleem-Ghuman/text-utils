import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function TextForm({ heading }) {
  const [text, setText] = useState('');

  const handleUpClick = () => {
    const newText = text.toUpperCase();
    setText(newText);
  };

  const handleDnClick = () => {
    const newText = text.toLocaleLowerCase();
    setText(newText);
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <div className="container ">
        <div className="mb-3 mt-5">
          <h2>
            heading=
            {heading}
          </h2>
          <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8" />
          <button className="btn btn-primary my-3" type="submit" onClick={handleUpClick}>Convert to Uppercase</button>
          <button className="btn btn-success ms-3" type="submit" onClick={handleDnClick}>Convert to lowercase</button>
        </div>
        <div>
          <span className="border bg-light p-1">
            No. of Letters =
            {text.length}
          </span>
          <span className="border bg-light p-1 mx-3">
            No. of Words =
            {text.split(' ').length}
          </span>
        </div>
      </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};

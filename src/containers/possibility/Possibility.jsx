import React from 'react';
import possibilityImage from '../../assets/inteligencia2.webp';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Request info for future components</h4>
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>Evolution needs to come with inclusion and awareness of the things we can produce, build and show in order to incorporate himanity as a whole. Like it or not, life is in a continuum, no matter what, we all need to get by through the changes.</p>
      <h4>Request info for future components</h4>
    </div>
  </div>
);

export default Possibility;
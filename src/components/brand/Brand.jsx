import React from 'react';
import { google, slack, github, gmail } from './imports';
import './brand.css';

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img src={google} />
    </div>
    <div>
      <img src={slack} />
    </div>
    <div>
      <img src={github} />
    </div>
    <div>
      <img src={gmail} />
    </div>

  </div>
);

export default Brand;
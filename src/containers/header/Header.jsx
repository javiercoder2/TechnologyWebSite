import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/inteligencia.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Calculator: The AI to solve all your mathematics problems</h1>
      <p>Calculators have been a great deal for mankind, and it's been evolving throught the years. We used to use it at scholl, home, and even at parties in the past! Now, calculators are integrated into algorithms and machines we don't 'really' see, well, we do but in an abstract way. Without further ado, we introduce you the AI Calculator. </p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>The intention lies on the usage from users and the way they work with it</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
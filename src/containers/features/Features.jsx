import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Improving end distrusts instantly',
    text: 'It`s a common calculator, no arguments on that, however, to make more interactive can get to more people, specially kids who dont`t like to do math exercises. This can help them out to develop a special interest',
  },
  {
    title: 'Personal and close',
    text: 'By creating a connection with an AI, we establish a more emotional and sociable interaction which increase the motivation to use this calculator',
  },
  {
    title: 'Calculator v/s AI Calculator  ',
    text: 'A revolutionary battle between the same but distinct',
  },
  {
    title: 'A way to show Programming in a more visual way',
    text: 'All the codes we make from the backside may give a visual representation',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now, come and take a look into the nowadays technology & check it with your own eyes</h1>
      <p>Request Information for Future Adds-in Components</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
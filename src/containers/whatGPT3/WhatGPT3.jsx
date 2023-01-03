import React from 'react';
import Feature from '../../components/feature/Feature';
import './WhatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is AI Calculator" text="In a world of technology calculators are not longer use and when this scenario happens we tend to use the google calculator, windows, mac or the physical one. Well, in this case, you can use an interactive calculator where the AI will tell you  what kind of operation you want and do it for you in a second. This makes more visual and with a fresh interaction. Therefore, please use it at your convenience"/>
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Make a good use of the interactive Calculator where you ask what to do to an interactive AI</h1>
      <p>Explore the Examples</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="ChatAI" text="From the start, you will be interacting to an AI and letting it know exactly what you want to do." />
      <Feature title="Usage" text="Make your choice about what you want by writting it and then insert the values you need to be done" />
      <Feature title="Modifications" text="This AI is going to be evolving through the pass of time. Features will be added at any moment, so... stay in tune!" />
    </div>
  </div>
);

export default WhatGPT3;
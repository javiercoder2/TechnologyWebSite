import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Dec 5, 2022" text="AI Calculator - an Intromission into the Math World" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Dec 18, 2022" text="Wanna know something more specifics for the AI Calculator?" />
        <Article imgUrl={blog03} date="Dec 26, 2022" text="Ways to make AI Calculator better" />
        <Article imgUrl={blog04} date="Dec 29, 2022" text="Three neccesary things to add" />
        <Article imgUrl={blog05} date="Jan 2, 2023" text="Do you have an idea to insert or to use?" />
      </div>
    </div>
  </div>
);

export default Blog;
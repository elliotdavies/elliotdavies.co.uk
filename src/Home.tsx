import React, { FC } from "react";
import { Link } from "react-router-dom";

import { Post } from "./types";

const posts: Record<string, Post> = {};

let required = require.context("./posts", true, /\.mdx$/);
required.keys().forEach((k) => {
  const { default: component, title, date } = required(k);
  posts[k] = { component, title, date };
});

const Home: FC<{ posts: Record<string, Post> }> = ({ posts }) => (
  <main>
    <h1>
      <pre>elliot :: SoftwareEngineer</pre>
    </h1>

    <p>
      Hello! I'm an engineer at <a href="https://www.habito.com/">Habito</a>,
      using Haskell and PureScript to build the UK's first digital mortgage
      adviser.
    </p>

    <p>
      From 2015-18 I was a full-stack JavaScript developer at{" "}
      <a href="https://medium.com/digital-times">The Times</a> of London, where
      I built tools for journalists and editors to use in the newsroom.
    </p>

    <p>
      I was also involved for quite a while in supporting the next generation of
      journalists as a trustee of the{" "}
      <a href="http://spajournalism.com/">Student Publication Association</a>,
      the UK's national body for student newspapers and magazines.
    </p>

    <p>
      You can find me on <a href="https://github.com/elliotdavies">GitHub</a>,{" "}
      <a href="https://twitter.com/elimoto">Twitter</a> or{" "}
      <a href="https://linkedin.com/in/elliotdavies">LinkedIn</a>.
    </p>

    <h2>Recent posts</h2>
    <ul>
      {Object.entries(posts).map(([k, { title }]) => (
        <li key={k}>
          <Link to={`/${k}`}>{title}</Link>
        </li>
      ))}
    </ul>
  </main>
);

export default Home;
